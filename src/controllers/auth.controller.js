import * as dotenv from "dotenv";
import {
  checkEmailExist,
  createUser,
  updatePassword,
} from "../services/auth.service.js";
import {
  handleComparePassword,
  handleHashPassword,
} from "../utils/hash-password.util.js";
import { HTTP_STATUS } from "../common/http-status.common.js";
import { handleGenerateToken } from "../utils/jwt.util.js";

dotenv.config();

export const registerController = async (req, res) => {
  const body = req.body;

  //check email
  const user = await checkEmailExist(body.email);
  if (user) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Email already exist",
      success: false,
    });
  }
  //hash password
  const hashPassword = await handleHashPassword({
    password: body.password,
    saltNumber: 5,
  });
  // create user in db
  const newUser = await createUser({ ...body, password: hashPassword });
  if (!newUser)
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "User not created",
      success: false,
    });
  //generate token
  const accessToken = await handleGenerateToken({
    payload: { _id: newUser._id, email: newUser.email },
  });

  //return
  return res.status(HTTP_STATUS.CREATED).json({
    message: "User created successfully!",
    success: true,
    accessToken,
  });
};

//LOGIN
export const loginController = async (req, res) => {
  const body = req.body;

  //Check
  const user = await checkEmailExist(body.email);
  if (!user)
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Email not found!",
      success: false,
    });
  //Compare password
  const isMatch = await handleComparePassword(
    { password: body.password },
    { hashPassword: user.password },
  );
  if (!isMatch)
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Password not match!",
      success: false,
    });
  // generate token
  const accessToken = await handleGenerateToken({
    payload: { _id: user._id, email: user.email, role: user.role },
  });

  return res.status(HTTP_STATUS.BAD_REQUEST).json({
    message: "Login successfully!",
    success: true,
    accessToken,
  });
};

// SEND EMAIL
export const sendEmailController = async (req, res) => {
  const { email } = req.email;
  //Check
  const user = await checkEmailExist(email);
  if (user) {
    //GENERATE TOKEN
    const accessToken = await handleGenerateToken({
      payload: { email: user.email },
      secretkey: process.env.SEND_EMAIL_SECRET_KEY,
      expiresIn: "1h",
    });
    //link reset password
    const link = `${process.env.URL_SERVER}/reset-password?token=${accessToken}`;
    //send email

    return res.status(HTTP_STATUS.OK).json({
      message: "Email sent successfully!",
      success: true,
      link,
    });
  }
};
//RESET PASSWORD
export const resetPasswordController = async (req, res) => {
  const { newPassword } = req.forgotPassword;
  const { email } = req.email;
  //Check
  const user = await checkEmailExist(email);
  if (!user)
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Email not found!",
      success: false,
    });
  // hash password
  const hashPassword = await handleHashPassword({ password: newPassword });
  //update password
  const result = await updatePassword(user._id, hashPassword);
  if (!result)
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Update password faild",
      success: false,
    });
  return res.status(HTTP_STATUS.BAD_REQUEST).json({
    message: "Update password success!",
    success: true,
  });
};

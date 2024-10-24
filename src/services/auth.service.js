import User from "../models/user.model.js";

// Check email is already exist
export const checkEmailExist = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

// Create User
export const createUser = async (data) => {
  const user = await User.create({ data });
  return user;
};

// Update Password
export const updatePassword = async (userID, password) => {
  const user = User.findByIdAndUpdate(
    { _id: userID },
    { password },
    { new: true },
  );
  return Boolean(user);
};

//update status user
export const updateStatusUser = async (userID, status) => {
  const User = await User.findByIdAndUpdate(
    { _id: userID },
    { status },
    { new: true },
  );
  return Boolean(User);
};

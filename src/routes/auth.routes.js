import {
  loginController,
  registerController,
  resetPasswordController,
  sendEmailController,
} from '../controllers/auth.controller.js';
import {
  validationLogin,
  validationRegister,
  validationResetPassword,
  validationSendEmail,
} from '../middlewares/auth.middleware.js';
import express from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';

const router = express.Router();

//REGISTER
router.post(
  '/register',
  wrapRequestHandler(validationRegister),
  wrapRequestHandler(registerController),
);
//LOGIN
router.post(
  '/login',
  wrapRequestHandler(validationLogin),
  wrapRequestHandler(loginController),
);
// send email when user forget password
router.post(
  '/send-email',
  wrapRequestHandler(validationSendEmail),
  wrapRequestHandler(sendEmailController),
);
// reset password
router.put(
  '/reset-password',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(validationResetPassword),
  wrapRequestHandler(resetPasswordController),
);
export default router;

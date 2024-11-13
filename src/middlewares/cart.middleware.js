import { HTTP_STATUS } from '../common/http-status.common.js';
import { cartValidation } from '../validations/cart.validation.js';

export const cartMiddleware = async (req, res, next) => {
  const body = req.body;
  //validate
  const { error } = cartValidation.validate(body, { abortEarly: false });
  if (error) {
    const listError = error.details.map((item) => item.message);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: listError,
      success: false,
    });
  }
  next();
};

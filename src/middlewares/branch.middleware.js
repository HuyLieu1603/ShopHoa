import { HTTP_STATUS } from '../common/http-status.common.js';
import { branchValidation } from '../validations/branch.validation.js';

//BRANCH MIDDLEWARE
export const branchMiddleware = async (req, res, next) => {
  const body = req.body;
  //validate
  const { error } = branchValidation.validate(body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((item) => item.message);
    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: errors,
      success: false,
    });
  }
  next();
};

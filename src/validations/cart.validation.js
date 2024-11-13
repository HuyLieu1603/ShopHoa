import joi from 'joi';
import mongoose from 'mongoose';

export const cartValidation = joi.object({
  id_user: joi
    .string()
    .required()
    .custom((value, helper) => {
      if (!mongoose.Types.ObjectId.isValid(value))
        return helper.message('Mã khách hàng không hợp lệ');
      return value;
    })
    .messages({
      'string.empty': 'Mã khách hàng không được để trống',
      'any.required': 'Mã khách hàng không được để trống',
    }),
  Products: joi.array().items(
    joi.object({
      productId: joi
        .string()
        .required()
        .custom((value, helpers) => {
          if (!mongoose.Types.ObjectId.isValid(value))
            return helpers.message('Id sản phẩm không hợp lệ');
          return value;
        }),
      quantity: joi.number().default(1).min(1).required().messages({
        'any.required': 'Số lượng không được để trống',
        'number.base': 'Số lượng phải là một số',
        'number.min': 'Số lượng phải lớn hơn 0',
      }),
    }),
  ),
  total: joi.number().default(0).min(0),
});

import joi from 'joi';
import mongoose from 'mongoose';

export const orderValidation = joi.object({
  userId: joi
    .string()
    .required()
    .custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value))
        return helpers.message('Id người dùng không hợp lệ');
      return value;
    })
    .messages({
      'any.required': 'Id người dùng không được để trống',
      'string.empty': 'Id người dùng không được để trống',
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
  paymentMethod: joi
    .string()
    .required()
    .valid('cod', 'payment')
    .default('cod')
    .messages({
      'any.required': 'Phương thức thanh toán không được để trống',
      'string.empty': 'Phương thức thanh toán không được để trống',
      'any.only': 'Phương thức thanh toán chỉ có thể là "cod" hoặc "payment"',
    }),
  total: joi.number().min(0).default(0).messages({
    'any.required': 'Tổng tiền không được để trống',
    'number.base': 'Tổng tiền phải là một số',
    'number.min': 'Tổng tiền không được nhỏ hơn 0',
  }),
  inforOrderShipping: joi.array().items(
    joi.object({
      name: joi.string().required().min(3).messages({
        'any.required': 'Tên không được để trống',
        'string.empty': 'Tên không được để trống',
        'string.min': 'Tên phải có ít nhất 3 ký tự',
      }),
      phone: joi
        .string()
        .required()
        .pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .messages({
          'any.required': 'Số điện thoại không được để trống',
          'string.empty': 'Số điện thoại không được để trống',
          'string.pattern.base': 'Số điện thoại không hợp lệ',
        }),
      address: joi.string().required().messages({
        'any.required': 'Địa chỉ không được để trống',
        'string.empty': 'Địa chỉ không được để trống',
      }),
    }),
  ),
  status: joi
    .string()
    .required()
    .valid('pending', 'confirmed', 'delivery', 'completed', 'cancelled')
    .default('pending')
    .messages({
      'any.required': 'Trạng thái không được để trống',
      'string.empty': 'Trạng thái không được để trống',
      'any.only': 'Trạng thái không hợp lệ',
    }),
});

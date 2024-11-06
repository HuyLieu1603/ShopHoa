import Joi, { any } from 'joi';
import mongoose from 'mongoose';

export const warehouseValidation = Joi.object({
  nameWarehouse: Joi.string().required().messages({
    'any.required': 'Tên kho hàng không được để trống',
    'string.empty': 'Tên kho hàng không được để trống',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Địa chỉ kho hàng không được để trống',
    'string.empty': 'Địa chỉ kho hàng không được để trống',
  }),
  id_branch: Joi.string().custom((value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return helpers.message('Id chi nhánh không hợp lệ');
    }
    return value;
  }),
  Flowers: Joi.array().items(
    Joi.object({
      id: Joi.string()
        .required()
        .custom((value, helpers) => {
          if (!mongoose.Types.ObjectId.isValid(value))
            return helpers.message('ID loại hoa không hợp lệ');
          else return false;
        }),
      quantity: Joi.number().min(0).messages({
        'any.required': 'Số lượng không được để trống',
        'number.base': 'Số lượng phải là một số',
        'number.min': 'Số lượng phải lớn hơn 0',
      }),
    }),
  ),
  is_deleted: Joi.boolean().default(false),
  status: Joi.string().valid('active', 'inactive').default('active'),
});

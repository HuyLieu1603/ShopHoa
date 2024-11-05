import joi from 'joi';
import typeFlower from '../models/typeFlower.model';

export const typeFlowerValidation = joi.object({
  typeName: joi.string().required().message({
    'any.required': 'Tên loại hoa không được để trống',
    'string.empty': 'Tên loại hoa không được để trống',
  }),
  price: joi.number().min(0).required().messages({
    'any.required': 'Giá tiền không được để trống',
    'number.base': 'Giá tiền phải là một con số',
    'number.min': 'Giá tiền phải là một số lớn hơn 0',
  }),
  Image: joi.array().items(
    joi.object({
      url: joi.string().uri().required(),
      public_id: joi.string().required(),
    }),
  ),
  status: joi.string().valid('active', 'inactive').default('active'),
  is_deleted: joi.boolean().default(false),
});

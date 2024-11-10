import joi from 'joi';

export const branchValidation = joi.object({
  name: joi.string().required().messages({
    'any.required': 'Tên chi nhánh không được để trống',
    'string.empty': 'Tên chi nhánh không được để trống',
  }),
  address: joi.string().required().messages({
    'any.required': 'Địa chỉ chi nhánh không được để trống',
    'string.empty': 'Địa chỉ chi nhánh không được để trống',
  }),
  status: joi.string().valid('active', 'inactive').default('active'),
});

import joi from 'joi';
import mongoose from 'mongoose';

export const categoryValidation = joi.object({
  nameCategory: joi.string().required().messages({
    'any.required': 'Tên danh mục không được để trống',
    'string.empty': 'Tên danh mục không được để trống',
  }),
  is_deleted: joi.boolean(),
});

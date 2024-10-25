import joi from "joi";
import mongoose from "mongoose";

export const productValidation = joi.object({
  nameProduct: joi.string().required().messages({
    "any.required": "Tên sản phẩm không được để trống",
    "string.empty": "Tên sản phẩm không được để trống",
  }),
  price: joi.number().min(0).required().messages({
    "any.required": "Giá tiền không được để trống",
    "number.base": "Giá tiền phải là một số",
    "number.min": "Giá tiền phải lớn hơn 0.",
  }),
  id_category: joi
    .string()
    .required()
    .custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.message("ID danh mục không hợp lệ");
      }
      return value;
    })
    .messages({
      "any.required": "Danh mục sản phẩm không được để trống",
      "string.empty": "Danh mục sản phẩm không được để trống",
    }),
  desc: joi.string().max(500).messages({
    "string.max": "Mô tả sản phẩm không được vượt quá 500 ký tự",
  }),
  Image: joi.array().items(
    joi.object({
      url: joi.string().uri().required(),
      public_id: joi.string().required(),
    }),
  ),
  Flowers: joi.array().items(
    joi.object({
      id: joi
        .string()
        .required()
        .custom((value, helpers) => {
          if (!mongoose.Types.ObjectId.isValid(value))
            return helpers.message("ID loại hoa không hợp lệ");
          else return false;
        }),
      quantity: joi.number().min(0).messages({
        "any.required": "Số lượng không được để trống",
        "number.base": "Số lượng phải là một số",
        "number.min": "Số lượng phải lớn hơn 0",
      }),
    }),
  ),
});

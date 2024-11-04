import mongoose from 'mongoose';
import { HTTP_STATUS } from '../common/http-status.common.js';
import { categoryService } from '../services/category.service.js';
import { productService } from '../services/product.service.js';
import Category from '../models/Category.model.js';

export const categoryController = {
  //Check category exist
  checkCateExist: async (req, res) => {
    const { cateId } = req.params;
    const isExist = await categoryService.fetchCateById(cateId);
    if (!isExist)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Category is exist!',
        success: false,
      });
    return isExist;
  },
  //Add category
  addCate: async (req, res) => {
    const body = req.body;
    const newCate = await categoryService.addCategory(body);
    if (!newCate)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Create category failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Create category successfully!',
      success: true,
    });
  },
  //Update category by id
  updateCateById: async (req, res) => {
    const { cateId } = req.params;
    const body = req.body;
    const newCate = await categoryService.updateCateById(cateId, body);
    if (!newCate)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update category failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update category successfully!',
      success: true,
    });
  },
  //delete category by id
  deleteCateById: async (req, res) => {
    const { cateId } = req.params;
    const isExist = await productService.getProductByCateId(cateId);
    const delCatePromise = categoryService.deleteCategory(cateId);
    const setCateIdInProductPromise = productService.updateCateId(cateId);
    const [delCate, setCateIdInProduct] = await Promise.all([
      delCatePromise,
      setCateIdInProductPromise,
    ]);
    if (!delCate || !setCateIdInProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Delete category failed',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Delete category successfully!',
      success: true,
    });
  },
  //fetch list category
  fetchListCategory: async (req, res) => {
    const { query } = req.query;
    const result = await categoryService.fetchListCategory();
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'fetch list category failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'fetch list category successfully!',
      success: true,
      data: result,
    });
  },
};

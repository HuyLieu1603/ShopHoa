import mongoose from 'mongoose';
import { HTTP_STATUS } from '../common/http-status.common.js';
import { productService } from '../services/product.service.js';
import Product from '../models/product.model.js';

export const productController = {
  optionProduct: (params) => {
    const { _limit = 10, _page = 1, q, populate, rest } = params;

    let populateDefault = [
      {
        path: 'category',
        select: '_id nameCategory image desc',
      },
      {
        path: 'brand',
        select: '_id nameBrand image desc',
      },
    ];
    if (populate) {
      if (Array.isArray(populate)) {
        populateDefault = [...populateDefault, ...populate];
      } else {
        populateDefault.push(populate);
      }
    }
    let query = {};
    if (q) {
      query = {
        $and: [
          {
            $or: [{ nameProduct: { $regex: new RegExp(q), $options: 'i' } }],
          },
        ],
      };
    }
    // filter status
    if (rest.status) {
      query = {
        ...query,
        status: rest.status,
      };
    }
    // filter deleted
    if (rest.deleted) {
      query = {
        ...query,
        is_deleted: rest.deleted === 'true' ? true : false,
      };
    }

    const option = {
      limit: parseInt(_limit),
      page: parseInt(_page),
      populate: populateDefault,
      sort: { createdAt: -1 },
    };
    return { option, query };
  },

  //Check id product invalid
  checkIdProductInvalid: async (req, res) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId))
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Id product invalid',
        success: false,
      });
  },
  // check product exist
  checkProductExist: async (req, res) => {
    const { productId } = req.params;
    const isExist = await productService.getProductById(productId);
    if (!isExist)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Product is not exist',
        success: false,
      });
    return isExist;
  },
  //Add product
  addProduct: async (req, res) => {
    const body = req.body;
    const newProduct = await productService.addProduct(body);
    if (!newProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Add product failed',
        success: false,
      });
  },
  //Get all product
  getAllProduct: async (req, res) => {
    const { _limit = 10, _page = 1, q, ...rest } = req.query;
    const { option, query } = productController.optionProduct({
      _limit,
      _page,
      q,
      rest,
    });
    const lstProduct = await productService.getAllProduct(option, query);
    if (!lstProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Get all product failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Get all product successfully!',
      success: true,
      ...lstProduct,
    });
  },
  //Get product by Id
  getProductById: async (req, res) => {
    const { productId } = req.params;
    const product = await productService.getProductById(productId);
    if (!product)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Get product by Id failed',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Get Product By Id Successfully!',
      success: true,
      data: product,
    });
  },
  //Delete product by Id
  deleteProductById: async (req, res) => {
    const { productId } = req.params;

    await productController.checkIdProductInvalid(req, res);

    const product = await productService.deleteProductById(productId);
    if (!product)
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: 'Delete product failed', success: false });
    return res
      .status(HTTP_STATUS.OK)
      .json({ message: 'delete product successfully!' });
  },
  //update status product
  updateStatus: async (req, res) => {
    const { productId } = req.params;
    const { is_deleted, status } = req.query;

    if (!is_deleted || !status) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update is_deleted and status failed',
        success: false,
      });
    }
    const deleted = is_deleted === 'true' ? true : false;
    const statusProduct = status === 'active' ? 'active' : 'inactive';

    if (is_deleted) {
      const product = await productService.updateIsDeleted(productId, deleted);
      if (!product)
        return res
          .status(HTTP_STATUS.BAD_REQUEST)
          .json({ message: 'update is_deleted failed', success: false });
      return res.status(HTTP_STATUS.OK).json({
        message: 'Update is_deleted successfully!',
        success: true,
        data: product,
      });
    }
    const product = await productService.updateStatus(productId, statusProduct);
    if (!product)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update status failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update status successfully!',
      success: true,
      data: product,
    });
  },
};

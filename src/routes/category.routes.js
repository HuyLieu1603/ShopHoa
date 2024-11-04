import express from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { categoryController } from '../controllers/category.controller.js';
import { categoryMiddleware } from '../middlewares/category.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';

const router = express.Router();

//create a new category
router.post(
  '/category',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(categoryMiddleware),
  wrapRequestHandler(categoryController.addCate),
);
// fetch list category
router.get(
  '/categorys',
  wrapRequestHandler(categoryController.fetchListCategory),
);
// update category by id
router.put(
  '/category/:cateId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(categoryMiddleware),
  wrapRequestHandler(categoryController.updateCateById),
);
// delete category by id
router.delete(
  '/category/:cateId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(categoryController.deleteCateById),
);

export default router;

import express from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { productController } from '../controllers/product.controller';
import { productMiddleware } from '../middlewares/product.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
const router = express.Router();

router.post(
  './product',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(productMiddleware),
  wrapRequestHandler(productController.addProduct),
);
//router to get all products
router.get('./products', wrapRequestHandler(productController.getAllProduct));
//router to get product by id
router.get(
  './product:id',
  wrapRequestHandler(productController.getProductById),
);
//router update status
router.patch(
  './products/:productId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(productController.updateStatus),
);
//Xóa mềm nhiều product
router.patch(
  './product-delete-multiple',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(productController.updateIsDelManyProduct),
);
//router update product
router.put(
  './product/:productId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(productMiddleware),
  wrapRequestHandler(productController.updateProduct),
);
//delete product
router.delete(
  './product/:productId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(productController.deleteProductById),
);

export default router;

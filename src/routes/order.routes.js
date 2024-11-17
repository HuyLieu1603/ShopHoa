import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import { orderMiddleware } from '../middlewares/order.middleware.js';
import { orderController } from '../controllers/order.controller.js';
import express from 'express';

const router = express.Router();

//Create a order
router.post(
  '/order',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(orderMiddleware),
  wrapRequestHandler(orderController.orderByList),
);
router.post(
  '/order/:productId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(orderMiddleware),
  wrapRequestHandler(orderController.orderById),
);
//Get a order by id
router.get(
  '/order/:orderId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(orderController.getOrderById),
);
//Fetch all order
router.get(
  '/orders',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(orderController.fetchAllOrder),
);
//fetch list order by user
router.get(
  '/orders/:userId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(orderController.fetchListOrderByUser),
);
//

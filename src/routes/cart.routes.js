import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { cartController } from '../controllers/cart.controller.js';
import { cartMiddleware } from '../middlewares/cart.middleware.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express, { Router } from 'express';

const router = express.Router();

//Get product from cart
router.get(
  '/cart/:userId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(cartController.fetchListProductFromCart),
);
//Add product to cart
router.post(
  '/cart/:productId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(cartController.addProductToCartById),
);

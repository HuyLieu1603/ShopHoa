import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { cartController } from '../controllers/cart.controller.js';
import { cartMiddleware } from '../middlewares/cart.middleware.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express, { Router } from 'express';

const router = express.Router();

//Get product from cart
router.get(
  '/cart',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(cartController.fetchListProductFromCart),
);
//create cart
router.post(
  '/cart',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(cartMiddleware),
  wrapRequestHandler(cartController.createNewCart),
);
//Add product to cart
router.post(
  '/cart/:productId',
  wrapRequestHandler(verifyToken),
  // wrapRequestHandler(cartMiddleware),
  wrapRequestHandler(cartController.addProductToCartById),
);
//Update quantity product in cart

// Increase quantity product in cart
router.put('/');

export default router;

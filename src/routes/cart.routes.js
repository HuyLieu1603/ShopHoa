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
  wrapRequestHandler(cartController.getCartByUserid),
);

//Update quantity product in cart

// Increase quantity product in cart

export default router;

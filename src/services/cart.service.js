import { query } from 'express';
import cart from '../models/Cart.model.js';

export const cartService = {
  // get carts by userId
  getCartsByUserId: async (query, params) => {
    if (params) {
      return cart.findOne({ userId: query.userId }).populate([
        {
          path: 'userId',
          select: '_id email avatar fullname phone',
          match: { status: query.status, _id: query.userId },
        },
        {
          path: 'carts.productId', select : '_id nameProduct price'
        }
      ]);
    }
  },
};

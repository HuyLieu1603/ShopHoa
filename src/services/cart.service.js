import { query } from 'express';
import cart from '../models/Cart.model.js';

export const cartService = {
  //check exist cart
  checkCart: async (userId) => {
    return await cart.findById(userId);
  },
  //create a new cart
  createCart: async (userId) => {
    const newCart = new cart({ id_user: userId, Products: [] });
    return await newCart.save();
  },
  // get carts by userId
  getCartsByUserId: async (userId) => {
    if(!checkCart(userId))
      createCart(userId)
  },
};

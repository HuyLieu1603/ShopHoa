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
    if (!cartService.checkCart(userId)) createCart(userId);
    return await cart.findOne({ id_user: userId });
  },
  // Lấy các sản phẩm được chọn trong giỏ hàng
  getListProductIsSelected: async (userId) => {
    //Lấy giỏ hàng của người dùng
    const userCart = await getCartsByUserId(userId);
    //Lấy danh sách sản phẩm
    const listProduct = userCart.filter((item) => item.is_selected);
    return listProduct;
  },
  //Xóa các sản phẩm được chọn trong giỏ hàng
  deleteListProduct: async (userId) => {
    // Lấy danh sách sản phẩm
    const listProduct = getListProductIsSelected(userId);
    // Xóa các sản phẩm thuộc danh sách đó
    return await cart.deleteMany(listProduct);
  },
  //
};

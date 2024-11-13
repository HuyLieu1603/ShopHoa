import cart from '../models/Cart.model.js';

export const cartService = {
  //add product to cart
  addProductToCart: async (userId, productId) => {
    return await cart.findOneAndUpdate(
      { id_user: userId },
      { $push: { products: { productId: productId, quantity: 1 } } },
      { new: true },
    );
  },

  //update quantity cart
  //Increase Quantity Product From Cart
  increaseQuantityFromCart: async (userId) => {
    return await cart.findOneAndUpdate(
      { id_user: userId },
      { $inc: { 'Products.$.quantity': 1 } },
      { new: true },
    );
  },
  //Decrease Quantity Product From Cart
  decreaseQuantityFromCart: async (userId) => {
    return await cart.findOneAndUpdate(
      { id_user: userId },
      { $inc: { 'Products.$.quantity': -1 } },
      { new: true },
    );
  },

  //delete product from cart
  deleteProductFromCartById: async (productId) => {
    return await cart.findOneAndDelete(productId);
  },
  //delete many product from cart

  //delete all product from cart
};

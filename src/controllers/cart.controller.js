import { HTTP_STATUS } from '../common/http-status.common.js';
import cart from '../models/Cart.model.js';
import { cartService } from '../services/cart.service.js';

export const cartController = {
  //add product to cart
  addProductToCartById: async (req, res) => {
    //Get product id and user id
    const { productId } = req.params;
    const { userId } = req.user;
    const result = await cartService.addProductToCart(userId, productId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Thêm sản phẩm vào giỏ hàng thất bại!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Thêm sản phẩm vào giỏ hàng thành công!',
      success: true,
    });
  },
  //check exist
  checkExistCart: async (req, res) => {
    const { userId } = req.user;
    const isExist = await cartService.checkExist(userId);
    if (!isExist)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Không có sản phẩm nào trong giỏ hàng',
        success: false,
      });
  },
  //fetch list product from cart
  fetchListProductFromCart: async (req, res) => {
    const { userId } = req.user;
    await cartController.checkExistCart(req, res);
    const listProduct = await cartService.fetchProductsFromCart(userId);
    if (!listProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Tải giỏ hàng thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Tải giỏ hàng thành công!',
      success: true,
      data: listProduct,
    });
  },

  //update quantity product in cart
  //Increase quantity product in cart
  increaseQuantity: async (req, res) => {
    const { userId } = req.user;
    const result = await cartService.increaseQuantityFromCart(userId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Tăng số lượng sản phẩm thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Tăng số lượng sản phẩm thành công',
      success: true,
    });
  },
  //decrease quantity product in cart
  decreaseQuantity: async (req, res) => {
    const { userId } = req.user;
    const result = await cartService.decreaseQuantityFromCart(userId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Giảm số lượng sản phẩm thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Giảm số lượng sản phẩm thành công',
      success: true,
    });
  },
  //DELETE
  //delete a product in cart
  deleteProductInCart: async (req, res) => {
    const { productId } = req.body;
    const result = await cartService.deleteProductFromCartById(productId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Xóa sản phẩm thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Xóa sản phẩm thành công',
      success: true,
    });
  },
  //delete all product in cart
  deleteAllProductInCart: async (req, res) => {
    const { cartId } = req.params;
    const result = await cartService.deleteAllProductFromCart(cartId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Xóa toàn bộ sản phẩm khỏi giỏ hàng thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Xóa toàn bộ sản phẩm khỏi giỏ hàng thành công',
      success: true,
    });
  },
};

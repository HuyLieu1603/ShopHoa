import { HTTP_STATUS } from '../common/http-status.common.js';
import cart from '../models/Cart.model.js';
import { cartService } from '../services/cart.service.js';

export const cartController = {
  // Get cart by user id
  getCartByUserid: async (req, res) => {
    const { userId } = req.user;
    const result = await cartService.getCartByUserid(userId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Tải giỏ hàng thất bại',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Tải giỏ hàng thành công',
      success: true,
      data: result,
    });
  },
  //
};

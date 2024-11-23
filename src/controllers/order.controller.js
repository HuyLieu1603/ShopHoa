import { HTTP_STATUS } from '../common/http-status.common.js';
import Order from '../models/order.model.js';
import { orderService } from '../services/order.service.js';
import { productService } from '../services/product.service.js';
import { authService, getUser } from '../services/auth.service.js';
import { cartService } from '../services/cart.service.js';

export const orderController = {
  //Tạo đơn hàng mới
  createNewOrder: async (req, res) => {
    const { userId } = req.user;
    const { productId } = req.params;
    const body = req.body;
    //Kiểm tra người dùng
    const user = await getUser(userId);
    if (!user)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Người dùng không tồn tại',
        success: false,
      });
    //Lấy danh sách sản phẩm
    const listProductSelected = await cartService.getListProductIsSelected(
      userId,
    );
    if (!listProductSelected)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Không có sản phẩm nào',
        success: false,
      });
    //Kiểm tra sản phẩm tồn tại
    const product = await productService.getProductById(productId);
    if (!product)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Sản phẩm không tồn tại',
        success: false,
      });
    //Kiểm tra số lượng sản phẩm
    const quantityProduct = await orderService.checkQuantity();
    if (!quantityProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Số lượng không đủ',
        success: false,
      });
    //tạo hóa đơn
    const result = await orderService.createOrderByProductId(
      userId,
      productId,
      body,
    );
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Đặt hàng thành công!',
        success: true,
        data: result,
      });
  },

  // Chỉnh sửa đơn hàng
  updateStatusOrder: async (req, res) => {
    const { userId } = req.user;
    const body = req.body;
    //Kiểm tra người dùng
    const user = await getUser(userId);
    if (!user)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Người dùng không tồn tại',
        success: false,
      });
    //Kiểm tra sản phẩm hợp lệ
    const listProduct = await cartService.getListProductIsSelected(userId);
    if (!listProduct)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Danh sách sản phẩm không tồn tại!',
        success: false,
      });
    //Kiểm tra số lượng tồn kho
    const quantity = await orderService.checkQuantity(
      listProduct,
      quantityWarehouse,
    );
    if (!quantity)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Số lượng không đủ',
        success: false,
      });
    //tạo hóa đơn
    const result = await orderService.createOrderByProductId(
      userId,
      listProduct,
      body,
    );
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Đặt hàng thành công!',
        success: true,
        data: result,
      });
  },
};

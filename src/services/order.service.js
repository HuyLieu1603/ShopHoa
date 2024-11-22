import Order from '../models/order.model.js';
import { cartService } from './cart.service.js';
import cart from '../models/Cart.model.js';

export const orderService = {
  // create a order by product
  createOrderByProductId: async (userId, productId, inforOrderShipping) => {
    const newOrder = new Order({
      userId: userId,
      Products: [{ productId }],
      inforOrderShipping: inforOrderShipping,
    });
    return await newOrder.save();
  },
  // Kiểm tra số lượng sản phẩm
  checkQuantity: async (listProduct, quantityBuy) => {
    for (const product of listProduct) {
      if (product.Flowers.quantity < quantityBuy) return false;
    }
    return true;
  },
  // Chỉnh sửa đơn hàng
  updateOrder: async (orderId, data) => {
    return await Order.findByIdAndUpdate({ _id: orderId }, data, { new: true });
  },
  // chỉnh sửa trạng thái đơn hàng
  updateStatusOrder: async (orderId, status) => {
    return await Order.findByIdAndUpdate(
      { _id: orderId },
      { status },
      { new: true },
    );
  },
  // xóa đơn hàng
  deleteOrder: async (orderId) => {
    return await Order.findByIdAndUpdate(
      { _id: orderId },
      { status: 'Đã xóa' },
      { new: true },
    );
  },
  // xóa tất cả đơn hàng
  deleteAllOrder: async (listOrderInCart) => {
    const deletePromise = listOrderInCart.map((order) =>
      Order.findByIdAndUpdate(
        { _id: order._id },
        { status: 'Đã xóa' },
        { new: true },
      ),
    );
    //Chờ tất cả các promise hoàn thành
    await Promise.all(deletePromise);
  },
};

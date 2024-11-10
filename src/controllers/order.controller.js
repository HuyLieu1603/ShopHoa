import { HTTP_STATUS } from '../common/http-status.common.js';
import Order from '../models/order.model.js';
import { orderService } from '../services/order.service.js';

export const orderController = {
  //Create a new order
  createOrder: async (req, res) => {
    const body = req.body;
    const newOrder = await orderService.addOrder(body);
    if (!newOrder)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Create a new order failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Create a new order successfully!',
      success: true,
      data: newOrder,
    });
  },
  //Get a order by id
  getOrderById: async (req, res) => {
    const { orderId } = req.params;
    const result = await orderService.getOrderById(orderId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Get order failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Get order successfully!',
      success: true,
      data: result,
    });
  },
  //fetch all order
  fetchAllOrder: async (req, res) => {
    const result = await orderService.fetchListOrder();
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Fetch all order failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Fetch all order successfully!',
      success: true,
      data: result,
    });
  },
  //fetch list order by user
  fetchListOrderByUser: async (req, res) => {
    //Lấy id user
    const { _id } = req.user;
    //Kiểm tra user có tồn tại không
    const body = req.body;
    const { userId, ...Order } = body;
    //Truy vấn những order của user đó
    const listOrderByUser = await orderService.fetchListOrderByUser(_id);
    if (!listOrderByUser)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Fetch list order by user failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Fetch list order by user successfully!',
      success: true,
    });
  },
  //update order
  updateOrderById: async (req, res) => {
    const { orderId } = req.params;
    const body = req.body;
    const result = await orderService.updateOrderById(orderId, body);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update order failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update order successfully!',
      success: true,
      data: result,
    });
  },
};

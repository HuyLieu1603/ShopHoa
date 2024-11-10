import Order from '../models/order.model.js';

export const orderService = {
  //Create a order
  addOrder: async (body) => {
    return await Order.create(body);
  },
  //Update a order by id
  updateOrderById: async (orderId, data) => {
    return await Order.findByIdAndUpdate(
      orderId,
      { $set: data },
      { new: true },
    );
  },
  //delete a order by id
  deleteOrderById: async (orderId) => {
    return await Order.findByIdAndDelete(orderId);
  },
  //get detail order by id
  getOrderById: async (orderId) => {
    return await Order.findById(orderId);
  },
  //fetch list order
  fetchListOrder: async () => {
    return await Order.find();
  },
  //fetch list order by user
  fetchListOrderByUser: async (userId) => {
    return await Order.findById(userId);
  },
};

import { set } from 'mongoose';
import typeFlower from '../models/typeFlower.model.js';

export const typeFlowerService = {
  //add type flower
  addTypeFlower: async (body) => {
    return await typeFlower.create(body);
  },
  //get list typeFlower
  getListTypeFlower: async () => {
    return await typeFlower.find();
  },
  //get typeFlower by id
  getTypeFlowerById: async (id) => {
    return await typeFlower.findById(id);
  },
  //update type flower by id
  updateTypeFlowerById: async (typeFlowerId, data) => {
    return await typeFlower.findByIdAndUpdate(
      typeFlowerId,
      { $set: data },
      { new: true },
    );
  },
  //delete type flower by id
  deleteTypeFlowerById: async (typeFlowerId) => {
    return await typeFlower.findByIdAndDelete(typeFlowerId);
  },
  //update status
  updateStatus: async (typeFlowerId, status) => {
    return await typeFlower.findByIdAndUpdate(
      { _id: typeFlowerId },
      { status },
      { new: true },
    );
  },
  //update is deleted ?
  updateIsDeleted: async (id, is_deleted) => {
    return await typeFlower.findByIdAndUpdate(
      { _id: id },
      { is_deleted: is_deleted },
      { new: true },
    );
  },
};

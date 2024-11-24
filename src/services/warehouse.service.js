import warehouse from '../models/wareHouse.model.js';

export const warehouseService = {
  //add warehouse
  addWarehouse: async (data) => {
    return await warehouse.create(data);
  },
  // get quantity flowers from warehouse
  getQuantityFlower: async (warehouseId, id_typeFlower) => {
    return await warehouse.findOne(
      {
        _id: warehouseId,
        'Flowers.id_typeFlower': id_typeFlower,
      },
      {
        'Flowers.$': 1,
      },
    );
  },
  // add type flower into warehouse
  addTypeFlower: async (warehouseId, id_typeFlower, quantity) => {
    return await warehouse.findOneAndUpdate(
      { _id: warehouseId, 'Flowers.id_typeFlower': { $ne: id_typeFlower } },
      { $push: { Flowers: [id_typeFlower, quantity] } },
      { new: true },
    );
  },
  //get warehouse by id
  getWarehouseById: async (warehouseId) => {
    return await warehouse.findById(warehouseId);
  },
  //fetch list warehouse
  fetchListWarehouse: async () => {
    return await warehouse.find();
  },
  //update warehouse by Id
  updateWarehouse: async (warehouseId, data) => {
    return await warehouse.findByIdAndUpdate(
      warehouseId,
      { $set: data },
      { new: true },
    );
  },
  //delete warehouse by id
  deleteWarehouse: async (warehouseId) => {
    return await warehouse.findByIdAndDelete(warehouseId);
  },
  //update status
  updateStatus: async (warehouseId, status) => {
    return await warehouse.findByIdAndUpdate(
      { _id: warehouseId },
      { status },
      { new: true },
    );
  },
};

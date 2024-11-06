import warehouse from '../models/wareHouse.model';

export const warehouseService = {
  //add warehouse
  addWarehouse: async (data) => {
    return await warehouse.create(data);
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

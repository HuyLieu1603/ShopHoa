import { HTTP_STATUS } from '../common/http-status.common.js';
import { warehouseService } from '../services/warehouse.service.js';

export const warehouseController = {
  //add warehouse
  CreateWarehouse: async (req, res) => {
    const body = req.body;
    const newWarehouse = await warehouseService.addWarehouse(body);
    if (!newWarehouse)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Create new warehouse failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Create new warehouse successfully!',
      success: true,
      data: newWarehouse,
    });
  },
  //get warehouse by Id
  getWarehouseById: async (req, res) => {
    const { warehouseId } = req.params;
    const result = await warehouseService.getWarehouseById(warehouseId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Get warehouse failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Get warehouse successfully!',
      success: true,
      data: result,
    });
  },
  //fetch list warehouse
  fetchListWarehouse: async (req, res) => {
    const listWarehouse = await warehouseService.fetchListWarehouse();
    if (!listWarehouse)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Fetch list warehouse failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Fetch list warehouse successfully!',
      success: true,
      data: listWarehouse,
    });
  },
  //update warehouse by id
  updateWarehouseById: async (req, res) => {
    const { warehouseId } = req.params;
    const body = req.body;
    const result = await warehouseService.updateWarehouse(warehouseId, body);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update warehouse failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update warehouse successfully!',
      success: true,
    });
  },
  //update status warehouse
  updateStatus: async (req, res) => {
    const { warehouseId } = req.params;
    const { status } = req.query;
    if (!status)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update status failed!',
        success: false,
      });
    const isStatus = status === 'active' ? 'active' : 'inactive';
    if (isStatus) {
      const result = await warehouseService.updateStatus(warehouseId, status);
      if (!result)
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
          message: 'Update status failed!',
          success: false,
        });
      return res.status(HTTP_STATUS.OK).json({
        message: 'Update status successfully!',
        success: true,
      });
    }
  },
  //delete warehouse
  deleteWarehouse: async (req, res) => {
    const { warehouseId } = req.params;
    const result = await warehouseService.deleteWarehouse(warehouseId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Delete warehouse failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Delete warehouse successfully',
      success: true,
    });
  },
  // add type flower into warehouse
  addTypeFlower: async (req, res) => {
    const { warehouseId } = req.params;
    const { id_typeFlower, quantity } = req.body;
    // add
    const addFlower = await warehouseService(
      warehouseId,
      id_typeFlower,
      quantity,
    );
    if (!addFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Thêm loại hoa vào kho thất bại!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Thêm loại hoa vào kho thành công!',
      success: true,
      data: addFlower,
    });
  },
};

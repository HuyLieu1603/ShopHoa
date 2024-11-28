import { HTTP_STATUS } from '../common/http-status.common.js';
import { typeFlowerService } from '../services/typeFlower.service.js';

export const typeFlowerController = {
  //add type flower
  addTypeFlower: async (req, res) => {
    const body = req.body;

    const result = await typeFlowerService.addTypeFlower(body);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Create type flower failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Create new type flower successfully!',
      success: true,
      data: result,
    });
  },
  //fetch list type flower
  fetchListTypeFlower: async (req, res) => {
    const listTypeFlower = await typeFlowerService.getListTypeFlower();
    if (!listTypeFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'fetch list failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'fetch list successfully!',
      success: true,
      data: listTypeFlower,
    });
  },
  //get type flower by id
  getTypeFlowerById: async (req, res) => {
    const { typeFlowerId } = req.params;
    const detailTypeFlower = await typeFlowerService.getTypeFlowerById(
      typeFlowerId,
    );
    if (!detailTypeFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'get type flower failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'get type flower successfully!',
      success: true,
      data: detailTypeFlower,
    });
  },
  //delete type flower by id
  delTypeFlowerById: async (req, res) => {
    const { typeFlowerId } = req.params;
    const deleteTypeFlower = await typeFlowerService.deleteTypeFlowerById(
      typeFlowerId,
    );
    if (!deleteTypeFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'delete type flower failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Delete type flower successfully!',
      success: true,
    });
  },
  //update type flower
  updateTypeFlowerById: async (req, res) => {
    const { typeFlowerId } = req.params;
    const body = req.body;
    const result = await typeFlowerService.updateTypeFlowerById(
      typeFlowerId,
      body,
    );
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update type flower failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update type flower successfully!',
      success: true,
    });
  },
  //update status and is deleted
  updateIsDeletedTypeFlower: async (req, res) => {
    const { typeFlowerId } = req.params;
    console.log(typeFlowerId);
    const typeFlower = await typeFlowerService.getTypeFlowerById(typeFlowerId);
    if (!typeFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Không tìm thấy loại hoa!',
        success: false,
      });
    const checkDelete = typeFlower.is_deleted;
    typeFlower.is_deleted = !typeFlower.is_deleted;
    await typeFlower.save();
    const action = checkDelete
      ? 'Khôi phục sản phẩm thành công'
      : 'Xóa sản phẩm thành công';
    return res.status(HTTP_STATUS.OK).json({
      message: action,
      success: true,
    });
  },
  updateStatusTypeFlower: async (req, res) => {
    const { typeFlowerId } = req.params;
    const typeFlower = await typeFlowerService.getTypeFlowerById(typeFlowerId);
    if (!typeFlower)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Không tìm thấy loại hoa',
        success: false,
      });
    typeFlower.status === 'active' ? 'inactive' : 'active';
    await typeFlower.save();
    return res.status(HTTP_STATUS.OK).json({
      message: 'Thay đổi trạng thái thành công!',
      success: true,
      data: typeFlower.status,
    });
  },
};

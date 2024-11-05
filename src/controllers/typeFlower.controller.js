import { HTTP_STATUS } from '../common/http-status.common.js';
import { typeFlowerService } from '../services/typeFlower.service.js';
import mongoose from 'mongoose';
import typeFlower from '../models/typeFlower.model.js';

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
  //update status
  updateStatusTypeFlower: async (req, res) => {
    const { typeFlowerId } = req.params;
    const { status } = req.status;
  },
};

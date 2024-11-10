import { HTTP_STATUS } from '../common/http-status.common.js';
import { branchMiddleware } from '../middlewares/branch.middleware.js';
import { branchService } from '../services/branch.service.js';

export const branchController = {
  //Create a new branch
  createBranch: async (req, res) => {
    const body = req.body;
    const newBranch = await branchService.addBranch(body);
    if (!newBranch)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Create new branch failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Create new branch successfully!',
      success: true,
      data: body,
    });
  },
  //Get branch by id
  getBranchById: async (req, res) => {
    const { branchId } = req.params;
    const result = await branchService.getBranch(branchId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Get branch failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Get branch successfully!',
      success: true,
      data: result,
    });
  },
  //fetch list branch
  fetchListBranch: async (req, res) => {
    const listBranch = await branchService.fetchListBranch();
    if (!listBranch)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Fetch list branch failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Fetch list branch successfully!',
      success: true,
      data: listBranch,
    });
  },
  //update branch by id
  updateBranchById: async (req, res) => {
    const { branchId } = req.params;
    const data = req.body;
    const newBranch = await branchService.updateBranchById(branchId, data);
    if (!newBranch)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Update branch failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Update branch successfully!',
      success: true,
    });
  },
  //delete branch by id
  deleteBranchById: async (req, res) => {
    const { branchId } = req.params;
    const result = await branchService.deleteBranchById(branchId);
    if (!result)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        message: 'Delete branch failed!',
        success: false,
      });
    return res.status(HTTP_STATUS.OK).json({
      message: 'Delete branch successfully!',
      success: true,
    });
  },
};

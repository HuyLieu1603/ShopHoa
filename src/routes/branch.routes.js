import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { branchController } from '../controllers/branch.controller.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import { branchMiddleware } from '../middlewares/branch.middleware.js';
import express from 'express';

const router = express.Router();

//Create a new branch
router.post(
  '/branch',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(branchMiddleware),
  wrapRequestHandler(branchController.createBranch),
);

//Gew a branch by id
router.get(
  '/branch/:branchId',
  wrapRequestHandler(branchController.getBranchById),
);

//fetch list branch
router.get('/branches', wrapRequestHandler(branchController.fetchListBranch));

//delete branch by id
router.delete(
  '/branch/:branchId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(branchController.deleteBranchById),
);

//update branch by id
router.put(
  '/branch/:branchId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(branchController.updateBranchById),
);

export default router;

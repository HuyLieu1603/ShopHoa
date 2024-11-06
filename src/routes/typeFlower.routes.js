import { typeFlowerController } from '../controllers/typeFlower.controller.js';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import express from 'express';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import { typeFlowerMiddleware } from '../middlewares/typeFlower.middleware.js';

const router = express.Router();

router.post(
  '/type-flower',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(typeFlowerMiddleware),
  wrapRequestHandler(typeFlowerController.addTypeFlower),
);
//fetch list type flower
router.get(
  'type-flowers',
  wrapRequestHandler(typeFlowerController.fetchListTypeFlower),
);
//get detail type flower
router.get(
  'type-flower/:typeFlowerId',
  wrapRequestHandler(typeFlowerController.getTypeFlowerById),
);
//update type flower
router.put(
  'type-flower/:typeFlowerId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(typeFlowerMiddleware),
  wrapRequestHandler(typeFlowerController.updateTypeFlowerById),
);
//update status type flower
router.patch(
  '/type-flowers/:typeFlowerId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(typeFlowerController.updateStatusTypeFlower),
);
//update is deleted
router.patch(
  'typeFlower-delete-multiple',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(typeFlowerController.updateIsDeletedTypeFlower),
);

export default router;

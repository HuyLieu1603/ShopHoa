import { HTTP_STATUS } from '../common/http-status.common.js';
import express, { Router } from 'express';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handler.ulti.js';
import { warehouseController } from '../controllers/warehouse.controller.js';
import { warehouseMiddleware } from '../middlewares/warehouse.middleware.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';

const router = express.Router();

//get warehouse by id
router.get(
  '/warehouses',
  wrapRequestHandler(warehouseController.fetchListWarehouse),
);

//fetch list warehouse
router.get(
  '/warehouse/:warehouseId',
  wrapRequestHandler(warehouseController.getWarehouseById),
);

//create a new warehouse
router.post(
  '/warehouse',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(warehouseMiddleware),
  wrapRequestHandler(warehouseController.CreateWarehouse),
);

//update warehouse by id
router.put(
  '/warehouse/:warehouseId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(warehouseMiddleware),
  wrapRequestHandler(warehouseController.updateWarehouseById),
);

//update status warehouse by id
router.patch(
  '/warehouse/:warehouseId',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(warehouseController.updateStatus),
);

//delete warehouse
router.delete(
  '/warehouse',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(warehouseController.deleteWarehouse),
);

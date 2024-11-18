import express from 'express';
import authRoutes from './auth.routes.js';
import categoryRoutes from './category.routes.js';
import typeFlowerRoutes from './typeFlower.routes.js';
import productRoutes from './product.routes.js';
import wareHouseRoutes from './warehouse.routes.js';
import branchRoutes from './branch.routes.js';
import cartRoutes from './cart.routes.js';

const router = express.Router();

const rootRoutes = [
  authRoutes,
  categoryRoutes,
  productRoutes,
  typeFlowerRoutes,
  wareHouseRoutes,
  branchRoutes,
  cartRoutes,
];
rootRoutes.map((route) => {
  router.use(route);
});

export default router;

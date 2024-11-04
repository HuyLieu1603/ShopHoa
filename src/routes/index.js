import express from 'express';
import authRoutes from './auth.routes.js';
import categoryRoutes from './category.routes.js';

const router = express.Router();

const rootRoutes = [authRoutes, categoryRoutes];
rootRoutes.map((route) => {
  router.use(route);
});

export default router;

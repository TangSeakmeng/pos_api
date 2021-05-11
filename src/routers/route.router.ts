import { Router } from 'express';
import userRouter from './userRouter.router';
import productRouter from './productRouter.router';
import categoryRouter from './categoryRouter.router';

const routes = Router();

routes.use('/api/users', userRouter);
routes.use('/api/products', productRouter);
routes.use('/api/categories', categoryRouter);

export default routes;
import { Router } from 'express';
import userRouter from './userRouter.router';
import productRouter from './productRouter.router';

const routes = Router();

routes.use('/api/users', userRouter);
routes.use('/api/products', productRouter);

export default routes;
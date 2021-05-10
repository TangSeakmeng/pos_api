import { Request, Response, Router } from 'express';
const productRouter = Router();

productRouter.get('', (req: Request, res: Response) => {
  try {
    const arrProduct = [
      {
        id: 1,
        name: 'product 1'
      },
      {
        id: 2,
        name: 'product 2'
      }
    ];
    return res.status(200).json(arrProduct);
  } catch (error) {
    return res.status(501).json(error);
  }
});

productRouter.post('/create', (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    return res.status(200).json(req.body);
  } catch (error) {
    return res.status(501).json(error);
  }
});

export default productRouter;

import { Request, Response, Router } from 'express';
const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  try {
    const string = 'hello world';
    res.status(200).send(string);
  } catch (error) {
    res.status(501).send(error);
  }
});

userRouter.post('/create', (req: Request, res: Response) => {
  try {
    const user = { firstname: 'hello', lastname: 'world' };
    return res.status(200).json(user);
  } catch (error) {
    return res.status(501).json(error);
  }
});

export default userRouter;
import { Request, Response, Router } from 'express';
import { User } from '../entity/User.entity';
import { v4 as uuidv4 } from 'uuid';
const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.createQueryBuilder('users').getMany();
    res.status(200).send(users);
  } catch (error) {
    res.status(501).send(error);
  }
});

userRouter.get('/getUser', async (req: Request, res: Response) => {
  try {
    const user = await User.createQueryBuilder('users').getOne();
    res.status(200).send(user);
  } catch (error) {
    res.status(501).send(error);
  }
});

// userRouter.post('/create', async (req: Request, res: Response) => {
//   try {
//     const user = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       age: req.body.age,
//       photoDownloadUrl: req.body.photoDownloadUrl,
//       photoFilePath: req.body.photoFilePath,
//       createdDate: new Date(),
//       updatedDate: new Date()
//     };
//     const insertUser: User = User.create(user);
//     const result = await insertUser.save();
//     return res.status(201).json(result);
//   } catch (error) {
//     return res.status(501).json(error);
//   }
// });

userRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const insertUser: User = User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      photoDownloadUrl: req.body.photoDownloadUrl,
      photoFilePath: req.body.photoFilePath,
      createdDate: new Date(),
      updatedDate: new Date()
    });
    const result = await insertUser.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(501).json(error);
  }
});

export default userRouter;
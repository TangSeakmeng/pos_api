import { Request, Response, Router } from 'express';
import { User } from '../entity/User.entity';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../entity/Category';
const categoryRouter = Router();

categoryRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const category = {
      id: uuidv4(),
      name: req.body.name,
      imageDownloadUrl: req.body.imageDownloadUrl,
      imageFilePath: req.body.imageFilePath,
      createdDate: new Date(),
      updatedDate: new Date()
    };
    const insertCategory: Category = Category.create(category);
    const result = await insertCategory.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(501).json(error);
  }
});

export default categoryRouter;
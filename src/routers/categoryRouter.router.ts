import { Request, Response, Router } from 'express';
import { User } from '../entity/User.entity';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../entity/Category';
const categoryRouter = Router();

// /api/categories/userid
categoryRouter.get('/userid/:userid', async (req: Request, res: Response) => {
  try {
    const { userid } = req.params;

    let categories = await Category
      .createQueryBuilder()
      .select('*')
      .from(Category, 'categories')
      // .innerJoinAndSelect("categories.createdBy", "users")
      .innerJoin(
        query => {
          return query
            .from(User, 'users')
            .select('id as "user_id", "firstName" as "user_firstName", "lastName" as "user_lastName"');
        },
        'users',
        '"user_id" = categories."createdBy"'
      )
      // .where("categories.createdBy = :userid")
      // .setParameters({ userid: userid })
      .getRawMany();
    
    console.log(categories)
    
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error)
  }
})

// /api/categories/create - POST
categoryRouter.post('/create', async (req: Request, res: Response) => {
  try {
    const user = new User();
    user.id = "a8f7878d-e2dc-4185-9226-9dc540d60a86";

    const category = {
      id: uuidv4(),
      name: req.body.name,
      imageDownloadUrl: req.body.imageDownloadUrl,
      imageFilePath: req.body.imageFilePath,
      createdDate: new Date(),
      updatedDate: new Date(),
      createdBy: user,
      updatedBy: user
    };
    const insertCategory: Category = Category.create(category);
    const result = await insertCategory.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(501).json(error);
  }
});

export default categoryRouter;
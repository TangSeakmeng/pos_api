import { User } from '../entity/User.entity';

export class UserService {

  public getAllUsers = async () => {
    const users = await User.createQueryBuilder('users').getMany();
    return users;
  }

}
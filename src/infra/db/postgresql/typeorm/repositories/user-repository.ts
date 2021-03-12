import { ConnectionManager, getConnectionManager, getRepository, Repository } from 'typeorm'
import { UserModel } from '../../../../../domain/models/user';
import { AddUser } from '../../../../../domain/usescases/user/add-user';
import User from '../entities/user';

class UserRepository implements AddUser {
  private readonly ormRepository: Repository<User>;

  constructor () {
    this.ormRepository = getRepository(User)
  }

  async add (data: AddUser.Params): Promise<UserModel> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user);

    return user
  }
}

export default UserRepository

import { getRepository, Repository } from 'typeorm'
import { UserStoriesModel } from '../../../../../domain/models/user-stories'
import { AddUserStories } from '../../../../../domain/usescases/user-stories/add-user-stories'
import UserStories from '../entities/user-stories'

class UserStoriesRepository implements AddUserStories {
  private readonly ormRepository: Repository<UserStories>

  constructor () {
    this.ormRepository = getRepository(UserStories)
  }

  async add (data: AddUserStories.Params): Promise<UserStoriesModel> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)

    return user
  }
}

export default UserStoriesRepository

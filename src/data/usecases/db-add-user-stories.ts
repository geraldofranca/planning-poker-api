import { UserStoriesModel } from '../../domain/models/user-stories'
import { AddUserStories } from '../../domain/usescases/user-stories/add-user-stories'

export class DbAddUserStories implements AddUserStories {
  constructor (private readonly addUserStoriesRepository: AddUserStories) {}

  async add (data: AddUserStories.Params): Promise<UserStoriesModel> {
    const userStories = await this.addUserStoriesRepository.add(data)
    return userStories
  }
}

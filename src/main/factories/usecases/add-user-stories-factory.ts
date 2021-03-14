import { DbAddUserStories } from '../../../data/usecases/db-add-user-stories'
import { AddUserStories } from '../../../domain/usescases/user-stories/add-user-stories'
import UserStoriesRepository from '../../../infra/db/postgresql/typeorm/repositories/user-stories-repository'

export const makeDbAddUserStories = (): AddUserStories => {
  const userStoriesRepository = new UserStoriesRepository()
  return new DbAddUserStories(userStoriesRepository)
}

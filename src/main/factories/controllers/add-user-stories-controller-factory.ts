import { AddUserStoriesController } from '../../../presentation/controllers/add-user-stories'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddUserStories } from '../usecases/add-user-stories-factory'
import { makeAddUserStoriesValidation } from '../validations/add-user-stories-factory'

export const makeAddUserStoriesController = (): Controller => {
  return new AddUserStoriesController(makeAddUserStoriesValidation(), makeDbAddUserStories())
}

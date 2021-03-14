import { UserStoriesModel } from '../../models/user-stories'

export interface AddUserStories {
  add: (data: AddUserStories.Params) => Promise<UserStoriesModel>
}

export namespace AddUserStories {
  export type Params = Omit<UserStoriesModel, 'id'>

  export type Result = boolean
}

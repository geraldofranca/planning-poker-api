import { UserModel } from "../../models/user";

export interface AddUser {
  add: (data: AddUser.Params) => Promise<UserModel>
}

export namespace AddUser {
  export type Params = Omit<UserModel, 'id'>

  export type Result = boolean
}

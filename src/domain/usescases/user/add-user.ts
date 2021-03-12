import { UserModel } from "../../models/user";

export interface AddUser {
  add: (data: AddUser.Params) => Promise<void>
}

export namespace AddUser {
  export type Params = Omit<UserModel, 'id'>
}

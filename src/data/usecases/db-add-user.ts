import { UserModel } from "../../domain/models/user";
import { AddUser } from "../../domain/usescases/user/add-user";

export class DbAddUser implements AddUser {

  constructor (private readonly addUserRepository: AddUser) {}

  async add (data: AddUser.Params): Promise<UserModel> {
    const user = await this.addUserRepository.add(data)
    return user
  }
}

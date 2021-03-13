import { DbAddUser } from '../../../data/usecases/db-add-user'
import { AddUser } from '../../../domain/usescases/user/add-user'
import UserRepository from '../../../infra/db/postgresql/typeorm/repositories/user-repository'

export const makeDbAddUser = (): AddUser => {
  const userRepository = new UserRepository()
  return new DbAddUser(userRepository)
}

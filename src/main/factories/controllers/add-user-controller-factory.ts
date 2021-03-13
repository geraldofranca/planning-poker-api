import { AddUserController } from '../../../presentation/controllers/add-user-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddUser } from '../usecases/add-user-factory'
import { makeAddUserValidation } from '../validations/add-user-validation-factory'

export const makeAddUserController = (): Controller => {
  return new AddUserController(makeAddUserValidation(), makeDbAddUser())
}

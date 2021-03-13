import { DeleteCardController } from '../../../presentation/controllers/delete-card-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbDeleteCard } from '../usecases/delete-card-factory'
import { makeDeleteCardValidation } from '../validations/delete-card-validation-factory'

export const makeDeleteCardController = (): Controller => {
  return new DeleteCardController(makeDeleteCardValidation(), makeDbDeleteCard())
}

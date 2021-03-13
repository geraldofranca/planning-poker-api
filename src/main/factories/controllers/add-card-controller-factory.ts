import { AddCardController } from '../../../presentation/controllers/add-card-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddCard } from '../usecases/add-card-factory'
import { makeAddCardValidation } from '../validations/add-card-validation-factory'

export const makeAddCardController = (): Controller => {
  return new AddCardController(makeAddCardValidation(), makeDbAddCard())
}

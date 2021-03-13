import { LoadCardsController } from '../../../presentation/controllers/load-cards-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbLoadCards } from '../usecases/load-cards-factory'

export const makeLoadCardsController = (): Controller => {
  return new LoadCardsController(makeDbLoadCards())
}

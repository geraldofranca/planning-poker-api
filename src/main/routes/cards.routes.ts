import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddCardController } from '../factories/controllers/add-card-controller-factory'
import { makeDeleteCardController } from '../factories/controllers/delete-card-controller-factory'
import { makeLoadCardsController } from '../factories/controllers/load-cards-controller-factory'

export default (router: Router): void => {
  router.get('/cards', adaptRoute(makeLoadCardsController()))
  router.post('/cards', adaptRoute(makeAddCardController()))
  router.delete('/cards', adaptRoute(makeDeleteCardController()))
}

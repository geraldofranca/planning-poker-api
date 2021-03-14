import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddVoteController } from '../factories/controllers/add-vote-controller-factory'

export default (router: Router): void => {
  router.post('/votes', adaptRoute(makeAddVoteController()))
}

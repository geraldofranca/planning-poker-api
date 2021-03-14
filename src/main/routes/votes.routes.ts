import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddVoteController } from '../factories/controllers/add-vote-controller-factory'

export default async (router: Router): Promise<void> => {
  router.post('/votes', adaptRoute(await makeAddVoteController()))
}

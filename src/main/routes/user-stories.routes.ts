import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddUserStoriesController } from '../factories/controllers/add-user-stories-controller-factory'

export default (router: Router): void => {
  router.post('/stories', adaptRoute(makeAddUserStoriesController()))
}

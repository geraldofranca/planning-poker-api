import { Router } from 'express'

export default (router: Router): void => {
  router.get('/stories', (req, res) => {
    res.json('User stories')
  })
}

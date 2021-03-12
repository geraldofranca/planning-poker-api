import { Router } from 'express'

export default (router: Router): void => {
  router.get('/cards', (req, res) => {
    res.json('Cards')
  })
}

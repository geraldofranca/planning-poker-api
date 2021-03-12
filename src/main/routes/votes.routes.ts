import { Router } from 'express'

export default (router: Router): void => {
  router.get('/votes', (req, res) => {
    res.json('Votes')
  })
}

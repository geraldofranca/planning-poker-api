import { Router } from 'express'
// import RabbitmqServer from '../../infra/mqtt/rabbitmq/rabbitmq-server'

export default (router: Router): void => {
  // router.post('/mqtt', async (req, res) => {
  //   const server = new RabbitmqServer('amqps://uotqvxyo:paJBFgacfnI5kO7zdoQGcbZgUS1AdQs_@orangutan.rmq.cloudamqp.com/uotqvxyo')
  //   await server.start()
  //   await server.publishInQueue('votes', JSON.stringify(req.body))
  //   await server.publishInExchange('amq.direct', 'route', JSON.stringify(req.body))
  //   res.send({ ok: 'ok' })
  // })

  // router.get('/mqtt', async (req, res) => {
  //   const server = new RabbitmqServer('amqps://uotqvxyo:paJBFgacfnI5kO7zdoQGcbZgUS1AdQs_@orangutan.rmq.cloudamqp.com/uotqvxyo')
  //   await server.start()
  //   const messages = []
  //   await server.consume('votes', message => {
  //     messages.push(message.content.toString())
  //   })
  //   res.send({ messages })
  // })
}

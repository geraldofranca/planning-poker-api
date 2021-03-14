import { PublishInQueue } from '../../../data/protocols/notifications/mqtt/publish-in-queue'
import { MqttPusblishInQueue } from '../../../data/usecases/mqtt-publish-in-queue'
import RabbitmqServer from '../../../infra/mqtt/rabbitmq/rabbitmq-server'
import PublishService from '../../../infra/mqtt/rabbitmq/services/publish-service'

export const makeMqttPublishInQueue = async (queue: string): Promise<PublishInQueue> => {
  const mqttServer = new RabbitmqServer('amqps://uotqvxyo:paJBFgacfnI5kO7zdoQGcbZgUS1AdQs_@orangutan.rmq.cloudamqp.com/uotqvxyo')
  await mqttServer.start()
  const publishService = new PublishService(mqttServer, queue)
  return new MqttPusblishInQueue(publishService)
}

import { PublishInQueue } from '../../../../data/protocols/notifications/mqtt/publish-in-queue'

class PublishService implements PublishInQueue {
  constructor (
    private readonly mqttServer,
    private readonly queue: string
  ) {}

  async publish (data: PublishInQueue.Params): Promise<PublishInQueue.Result> {
    return this.mqttServer.channel.sendToQueue(this.queue, Buffer.from(data.message))
  }
}

export default PublishService

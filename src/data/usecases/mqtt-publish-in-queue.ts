import { PublishInQueue } from '../protocols/notifications/mqtt/publish-in-queue'

export class MqttPusblishInQueue implements PublishInQueue {
  constructor (
    private readonly publishInQueue: PublishInQueue
  ) {}

  async publish (data: PublishInQueue.Params): Promise<PublishInQueue.Result> {
    return await this.publishInQueue.publish(data)
  }
}

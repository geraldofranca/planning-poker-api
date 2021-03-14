import { Connection, Channel, connect } from 'amqplib'

export default class RabbitmqServer {
  private connection: Connection
  private channel: Channel

  constructor (private readonly uri: string) {}

  async start (): Promise<void> {
    this.connection = await connect(this.uri)
    this.channel = await this.connection.createChannel()
  }

  // publishInQueue (queue: string, message: string): boolean {
  //   return this.channel.sendToQueue(queue, Buffer.from(message))
  // }

  // async publishInExchange (exchange: string, routingKey: string, message: string): Promise<boolean> {
  //   return this.channel.publish(exchange, routingKey, Buffer.from(message))
  // }

  // // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // consume (queue: string, callback: (message: Message) => void) {
  //   return this.channel.consume(queue, (message) => {
  //     callback(message)
  //     this.channel.ack(message)
  //   })
  // }
}

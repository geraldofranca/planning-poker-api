export interface PublishInQueue {
  publish: (data: PublishInQueue.Params) => Promise<PublishInQueue.Result>
}

export namespace PublishInQueue {
  export type Params = {
    message: string
  }

  export type Result = boolean
}

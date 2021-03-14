import { PublishInQueue } from '../../data/protocols/notifications/mqtt/publish-in-queue'
import { AddVote } from '../../domain/usescases/vote/add-vote'
import { badRequest, noContent, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class AddVoteController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addVote: AddVote,
    private readonly publishInQueue: PublishInQueue) {}

  async handle (request: AddVoteController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addVote.add({
        ...request,
        created_at: new Date()
      })
      this.publishInQueue.publish({
        message: 'Novo voto na história'
      })
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace AddVoteController {
  export type Request = {
    user_id: string
    card_id: string
    user_stories_id: string
    created_at?: Date
  }
}

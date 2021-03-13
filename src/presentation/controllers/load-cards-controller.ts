import { LoadCards } from '../../data/protocols/db/card/load-cards'
import { noContent, ok, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'

export class LoadCardsController implements Controller {
  constructor (private readonly loadCard: LoadCards) {}

  async handle (request: LoadCardsController.Request): Promise<HttpResponse> {
    try {
      const cards = await this.loadCard.load()
      return cards.length ? ok(cards) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadCardsController {
  export type Request = {}
}

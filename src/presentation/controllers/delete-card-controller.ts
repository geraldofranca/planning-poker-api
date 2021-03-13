import { DeleteCard } from '../../domain/usescases/card/delete-card'
import { ItemNotFoundError } from '../errors/item-not-found-error'
import { badRequest, forbidden, noContent, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class DeleteCardController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteCard: DeleteCard) {}

  async handle (request: DeleteCardController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const isValid = await this.deleteCard.delete({
        ...request
      })
      if (!isValid) {
        return forbidden(new ItemNotFoundError())
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteCardController {
  export type Request = {
    id: string
  }
}

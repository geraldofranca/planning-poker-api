import { AddCard } from '../../domain/usescases/card/add-card'
import { ValueInUseError } from '../errors/value-in-use-error'
import { badRequest, created, forbidden, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class AddCardController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCard: AddCard) {}

  async handle (request: AddCardController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const isValid = await this.addCard.add({
        ...request
      })
      if (!isValid) {
        return forbidden(new ValueInUseError())
      }
      return created()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddCardController {
  export type Request = {
    value: number
  }
}

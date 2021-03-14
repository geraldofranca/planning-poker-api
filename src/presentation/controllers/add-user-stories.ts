import { AddUserStories } from '../../domain/usescases/user-stories/add-user-stories'
import { badRequest, noContent, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class AddUserStoriesController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addUserStories: AddUserStories) {}

  async handle (request: AddUserStoriesController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addUserStories.add({
        ...request
      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddUserStoriesController {
  export type Request = {
    description: string
  }
}

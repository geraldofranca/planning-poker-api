import { AddUser } from '../../domain/usescases/user/add-user'
import { badRequest, noContent, serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpResponse } from '../protocols/http'
import { Validation } from '../protocols/validation'

export class AddUserController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addUser: AddUser) {}

  async handle (request: AddUserController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      await this.addUser.add({
        ...request,
        password: '123456',
        created_at: new Date()
      })
      return noContent()
    } catch (error) {
      console.info('error controle', error.stack)
      return serverError(error)
    }
  }
}

export namespace AddUserController {
  export type Request = {
    name: string
    email: string
    password: string
    created_at?: Date
    update_at?: Date
  }
}

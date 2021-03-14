import { AddVoteController } from '../../../presentation/controllers/add-vote-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddVote } from '../usecases/add-vote-factory'
import { makeAddVoteValidation } from '../validations/add-vote-validation-factory'

export const makeAddVoteController = (): Controller => {
  return new AddVoteController(makeAddVoteValidation(), makeDbAddVote())
}

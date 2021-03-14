import { AddVoteController } from '../../../presentation/controllers/add-vote-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeDbAddVote } from '../usecases/add-vote-factory'
import { makeMqttPublishInQueue } from '../usecases/publish-in-queue'
import { makeAddVoteValidation } from '../validations/add-vote-validation-factory'

export const makeAddVoteController = async (): Promise<Controller> => {
  return new AddVoteController(makeAddVoteValidation(), makeDbAddVote(), await makeMqttPublishInQueue('votes'))
}

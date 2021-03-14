import { VoteModel } from '../../domain/models/vote'
import { AddVote } from '../../domain/usescases/vote/add-vote'

export class DbAddVote implements AddVote {
  constructor (private readonly addVoteRepository: AddVote) {}

  async add (data: AddVote.Params): Promise<VoteModel> {
    const vote = await this.addVoteRepository.add(data)
    return vote
  }
}

import { getRepository, Repository } from 'typeorm'
import { VoteModel } from '../../../../../domain/models/vote'
import { AddVote } from '../../../../../domain/usescases/vote/add-vote'
import Vote from '../entities/vote'

class VoteRepository implements AddVote {
  private readonly ormRepository: Repository<Vote>

  constructor () {
    this.ormRepository = getRepository(Vote)
  }

  async add (data: AddVote.Params): Promise<VoteModel> {
    const vote = this.ormRepository.create(data)
    await this.ormRepository.save(vote)

    return vote
  }
}

export default VoteRepository

import { DbAddVote } from '../../../data/usecases/db-add-vote'
import { AddVote } from '../../../domain/usescases/vote/add-vote'
import VoteRepository from '../../../infra/db/postgresql/typeorm/repositories/vote-repository'

export const makeDbAddVote = (): AddVote => {
  const voteRepository = new VoteRepository()
  return new DbAddVote(voteRepository)
}

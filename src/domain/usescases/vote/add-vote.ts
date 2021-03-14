import { VoteModel } from '../../models/vote'

export interface AddVote {
  add: (data: AddVote.Params) => Promise<VoteModel>
}

export namespace AddVote {
  export type Params = Omit<VoteModel, 'id'>

  export type Result = boolean
}

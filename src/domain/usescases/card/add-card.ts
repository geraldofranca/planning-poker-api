import { CardModel } from '../../models/card'

export interface AddCard {
  add: (data: AddCard.Params) => Promise<AddCard.Result>
}

export namespace AddCard {
  export type Params = Omit<CardModel, 'id'>

  export type Result = boolean
}

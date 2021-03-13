import { CardModel } from '../../models/card'

export interface AddCard {
  add: (data: AddCard.Params) => Promise<CardModel>
}

export namespace AddCard {
  export type Params = Omit<CardModel, 'id'>
}

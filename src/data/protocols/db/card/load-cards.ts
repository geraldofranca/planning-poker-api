import { CardModel } from '../../../../domain/models/card'

export interface LoadCards {
  load: () => Promise<LoadCards.Result>
}

export namespace LoadCards {
  export type Result = CardModel[]
}

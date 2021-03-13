import { CardModel } from '../../../../domain/models/card'

export interface LoadCardById {
  loadCardById: (data: LoadCardById.Params) => Promise<LoadCardById.Result>
}

export namespace LoadCardById {
  export type Params = {
    id: string
  }

  export type Result = CardModel[]
}

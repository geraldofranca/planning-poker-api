export interface DeleteCard {
  delete: (param: DeleteCard.Params) => Promise<DeleteCard.Result>
}

export namespace DeleteCard {
  export type Params = {
    id: string
  }

  export type Result = boolean
}

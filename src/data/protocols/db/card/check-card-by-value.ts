export interface CheckCardByValue {
  checkByValue: (value: number) => Promise<CheckCardByValue.Result>
}

export namespace CheckCardByValue {
  export type Result = boolean
}

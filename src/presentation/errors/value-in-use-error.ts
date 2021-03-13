export class ValueInUseError extends Error {
  constructor () {
    super('The reported value is already in use')
    this.name = 'ValueInUseError'
  }
}

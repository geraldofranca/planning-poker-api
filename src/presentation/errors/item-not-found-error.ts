export class ItemNotFoundError extends Error {
  constructor () {
    super('Register not found')
    this.name = 'ItemNotFoundError'
  }
}

import { LoadCards } from '../protocols/db/card/load-cards'

export class DbLoadCards implements LoadCards {
  constructor (
    private readonly loadCardRepository: LoadCards
  ) {}

  async load (): Promise<LoadCards.Result> {
    return await this.loadCardRepository.load()
  }
}

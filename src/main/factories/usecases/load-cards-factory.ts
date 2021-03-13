import { LoadCards } from '../../../data/protocols/db/card/load-cards'
import { DbLoadCards } from '../../../data/usecases/db-load-cards'
import CardRepository from '../../../infra/db/postgresql/typeorm/repositories/card-repository'

export const makeDbLoadCards = (): LoadCards => {
  const cardRepository = new CardRepository()
  return new DbLoadCards(cardRepository)
}

import { DbAddCard } from '../../../data/usecases/db-add-card'
import { AddCard } from '../../../domain/usescases/card/add-card'
import CardRepository from '../../../infra/db/postgresql/typeorm/repositories/card-repository'

export const makeDbAddCard = (): AddCard => {
  const cardRepository = new CardRepository()
  return new DbAddCard(cardRepository, cardRepository)
}

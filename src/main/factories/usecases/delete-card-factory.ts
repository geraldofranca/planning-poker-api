import { DbDeleteCard } from '../../../data/usecases/db-delete-card'
import { DeleteCard } from '../../../domain/usescases/card/delete-card'
import CardRepository from '../../../infra/db/postgresql/typeorm/repositories/card-repository'

export const makeDbDeleteCard = (): DeleteCard => {
  const cardRepository = new CardRepository()
  return new DbDeleteCard(cardRepository, cardRepository)
}

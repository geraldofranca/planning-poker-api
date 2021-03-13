import { getRepository, Repository } from 'typeorm'
import { CardModel } from '../../../../../domain/models/card'
import { AddCard } from '../../../../../domain/usescases/card/add-card'
import Card from '../entities/card'

class CardRepository implements AddCard {
  private readonly ormRepository: Repository<Card>

  constructor () {
    this.ormRepository = getRepository(Card)
  }

  async add (data: AddCard.Params): Promise<CardModel> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)

    return user
  }
}

export default CardRepository

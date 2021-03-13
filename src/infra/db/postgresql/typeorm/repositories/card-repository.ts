import { getRepository, Repository } from 'typeorm'
import { CheckCardByValue } from '../../../../../data/protocols/db/card/check-card-by-value'
import { LoadCardById } from '../../../../../data/protocols/db/card/load-card-by-id'
import { LoadCards } from '../../../../../data/protocols/db/card/load-cards'
import { AddCard } from '../../../../../domain/usescases/card/add-card'
import { DeleteCard } from '../../../../../domain/usescases/card/delete-card'
import Card from '../entities/card'

class CardRepository implements AddCard, CheckCardByValue, DeleteCard, LoadCardById, LoadCards {
  private readonly ormRepository: Repository<Card>

  constructor () {
    this.ormRepository = getRepository(Card)
  }

  async add (data: AddCard.Params): Promise<AddCard.Result> {
    const card = this.ormRepository.create(data)
    await this.ormRepository.save(card)
    return card !== null
  }

  async checkByValue (value: number): Promise<CheckCardByValue.Result> {
    const checkCardExist = await this.ormRepository.find({ value: value })
    return !!checkCardExist[0]
  }

  async delete (param: DeleteCard.Params): Promise<DeleteCard.Result> {
    await this.ormRepository.delete({ id: param.id })
    return true
  }

  async loadCardById (param: LoadCardById.Params): Promise<LoadCardById.Result> {
    return await this.ormRepository.find({ id: param.id })
  }

  async load (): Promise<LoadCards.Result> {
    return await this.ormRepository.find()
  }
}

export default CardRepository

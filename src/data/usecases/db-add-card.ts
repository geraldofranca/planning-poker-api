import { AddCard } from '../../domain/usescases/card/add-card'
import { CheckCardByValue } from '../protocols/db/card/check-card-by-value'

export class DbAddCard implements AddCard {
  constructor (
    private readonly cardRepository: AddCard,
    private readonly checkCardByValue: CheckCardByValue) {}

  async add (data: AddCard.Params): Promise<AddCard.Result> {
    const exists = await this.checkCardByValue.checkByValue(data.value)
    let isValid = false
    if (!exists) {
      isValid = await this.cardRepository.add(data)
    }
    return isValid
  }
}

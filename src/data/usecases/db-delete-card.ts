import { DeleteCard } from '../../domain/usescases/card/delete-card'
import { LoadCardById } from '../protocols/db/card/load-card-by-id'

export class DbDeleteCard implements DeleteCard {
  constructor (
    private readonly deleteCardRepository: DeleteCard,
    private readonly loadCardById: LoadCardById
  ) {}

  async delete (param: DeleteCard.Params): Promise<DeleteCard.Result> {
    const exists = await this.loadCardById.loadCardById(param)
    let isValid = false
    if (exists) {
      isValid = await this.deleteCardRepository.delete(param)
    }
    return isValid
  }
}

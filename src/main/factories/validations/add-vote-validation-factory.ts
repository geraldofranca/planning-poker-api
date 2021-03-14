import { Validation } from '../../../presentation/protocols/validation'
import { RequiredFieldValidation } from '../../../validation/validators/required-field-validation'
import { ValidationComposite } from '../../../validation/validators/validation-composite'

export const makeAddVoteValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['user_id', 'card_id', 'user_stories_id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

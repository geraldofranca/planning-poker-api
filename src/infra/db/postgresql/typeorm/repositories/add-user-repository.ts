import { getRepository, Repository } from 'typeorm'
import { AddUser } from '../../../../../domain/usescases/user/add-user';

class AddUserRepository implements AddUser {
  async add (data: AddSurvey.Params): Promise<void> {
    
  }
}

export default AddUserRepository

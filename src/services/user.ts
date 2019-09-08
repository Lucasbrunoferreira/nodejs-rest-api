import { UserInterface, UserInputDTO } from '../interfaces/user'
import UserModel from '../models/user'
import logger from '../config/logger'

export default class UserService {
  userModel: any

  constructor () {
    this.userModel = UserModel
  }

  public async Create (userInputDTO: UserInputDTO): Promise<{ user: UserInterface }> {
    try {
      const userRecord = await this.userModel.create(userInputDTO)

      const user = userRecord.toObject()

      return { user }
    } catch (err) {
      logger.error(err)

      if (err.message.includes('duplicate key')) {
        throw new Error('Any user, already have some of the data informed, please review the unique fields')
      }

      throw new Error('Something unexpected happened while saving the user.')
    }
  }
}

import { Request, Response } from 'express'
import UserService from '../../services/user'
import { UserInputDTO } from '../../interfaces/user'

class UserController {
  userSerivce: UserService

  constructor (userService: UserService) {
    this.userSerivce = userService
  }

  public async createUser (req: Request, res: Response) {
    try {
      const response = await this.userSerivce.Create(req.body as UserInputDTO)

      return res.status(200).json(response.user)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }
}

export default UserController

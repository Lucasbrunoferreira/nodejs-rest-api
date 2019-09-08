import { Router, Request, Response } from 'express'
import UserController from '../controllers/user'
import middlewares from '../middlewares'
import { Container } from 'typedi'
import UserService from '../../services/user'

const route = Router()

const userService = Container.get(UserService)
const controller = new UserController(userService)

export default (app: Router): void => {
  app.use('/users', route)

  route.post('/', middlewares.example, (req: Request, res: Response) => controller.createUser(req, res))
}

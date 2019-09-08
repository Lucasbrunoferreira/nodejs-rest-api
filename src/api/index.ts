import { Router } from 'express'
import user from './routes/user'

export default (): Router => {
  const app = Router()

  user(app)

  return app
}

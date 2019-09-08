import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '../api'
import enviroment from '../config/environment'

export default ({ app }: { app: express.Application }): void => {
  app.use(cors())

  app.use(require('method-override')())

  app.use(bodyParser.json())

  app.use(enviroment.api.prefix, routes())
}

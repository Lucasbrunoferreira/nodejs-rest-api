import environment from './config/environment'
import Logger from './config/logger'
import express from 'express'

async function startServer (): Promise<void> {
  const app = express()

  await require('./config').default({ expressApp: app })

  app.listen(environment.port, (err): void => {
    if (err) {
      Logger.error(err)

      process.exit(1)

      return
    }

    Logger.info(`🛡️  Server listening on port: ${environment.port} 🛡️`)
  })
}

startServer()

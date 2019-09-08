import expressLoader from './express'
import mongoLoader from '../persistence/mongo'
import Logger from './logger'

export default async ({ expressApp }): Promise<void> => {
  await mongoLoader()

  Logger.info('✌️ DB loaded and connected!')

  await expressLoader({ app: expressApp })

  Logger.info('✌️ Express loaded')
}

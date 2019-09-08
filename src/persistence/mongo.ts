import mongoose from 'mongoose'
import { Db } from 'mongodb'
import environment from '../config/environment'

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(environment.mongoURI, { useNewUrlParser: true, useCreateIndex: true })

  return connection.connection.db
}

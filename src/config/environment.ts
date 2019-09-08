import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
  port: parseInt(process.env.PORT, 10),

  mongoURI: process.env.MONGODB_URI,

  api: {
    prefix: '/api'
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  }
}

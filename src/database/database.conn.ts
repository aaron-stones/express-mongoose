import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

export const databaseConn = async (): Promise<void> => {
  const env = process.env.MONGO_URL ?? 'mongodb://mongo:27017/my-database'

  try {
    await mongoose.connect(env)
    console.log('DB CONN SUCCESSFUL')
  } catch (e) {
    console.error('DATABASE FAILED CONN', e)
  }
}

export const newDatabaseConn = async (): Promise<void> => {
  const env = process.env.MONGO_URL ?? 'mongodb://mongo:27017/my-database'

  try {
    await mongoose.connect(env)
    console.log('DB CONN SUCCESSFUL')
  } catch (e) {
    console.error('DATABASE FAILED CONN', e)
  }
}

import { type ObjectId } from 'mongoose'

export type UserType = {
  name: string
  email: string
  age: number
  _id: ObjectId
} | null

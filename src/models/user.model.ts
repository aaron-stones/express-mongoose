import mongoose from 'mongoose'

export interface userInterface { name: string, email: string, age: number}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
})

export const User = mongoose.model<userInterface>('User', userSchema)

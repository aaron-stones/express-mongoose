import { ObjectId } from "mongoose"

export type UserResponseDto = {
    name: string
    email: string
    age: number
    _id: ObjectId
} | null
  
import { type UserCreateDto } from '../dtos/user.create.dto'
import { type UserResponseDto } from '../dtos/user.response.dto'
import { User, type userInterface } from '../models/user.model'
import { type UserType } from '../types/user.type'

export const findOne = async (id: string): Promise<UserResponseDto | null> => {
  try {
    return await User.findById(id)
  } catch (e) {
    return null
  }
}

export const get = async (): Promise<UserResponseDto[] | null> => {
  try {
    return await User.find()
  } catch (e) {
    console.error('error finding all results', e)
    return null
  }
}

export const create = async (user: UserCreateDto): Promise<userInterface | null> => {
  try {
    return await User.create(user)
  } catch (e) {
    console.error('unable to create record', e)
    return null
  }
}

export const update = async (
  id: string,
  user: UserCreateDto
): Promise<UserResponseDto> => {
  let result: UserType = null

  try {
    result = await User.findByIdAndUpdate(id, user)
  } catch (e) {
    console.error(`unable to update record ${id}`, e)
  }
  return result
}

export const remove = async (id: string): Promise<boolean> => {
  try {
    await User.findByIdAndDelete(id)
    return true
  } catch (e) {
    console.error(`unable to delete record ${id}`, e)
  }
  return false
}

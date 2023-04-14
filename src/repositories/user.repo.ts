import { UserDto } from '../dtos/user.dto';
import { User } from '../models/user.model';
import { UserType } from '../types/user.type';

export const get = async (id: string): Promise<UserType | null> => {
    try {
      return await User.findById(id);
    }
    catch(e){
      return null
    }
}

export const create = async (user: UserDto): Promise<UserType | null> => {
  let result:UserType = null;

  try {
    result = await User.create(user);
  }
  catch(e){
    console.error('unable to create record', e);
  }

  return result;
}

export const update = async (
  id: string,
  user: UserDto
): Promise<UserType> => {
  let result:UserType = null;

  try {
    result = await User.findByIdAndUpdate(id, user)
  }
  catch(e) {
    console.error(`unable to update record ${id}`, e);
  }
  return result;
}

export const remove = async (id: string): Promise<boolean> => {
  try {
    await User.findByIdAndDelete({id})
    return true;
  }
  catch(e){
    console.error(`unable to delete record ${id}`, e);
  }
  return false;
}

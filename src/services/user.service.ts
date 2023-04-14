import { UserDto } from "../dtos/user.dto";
import { create, get, remove, update } from "../repositories/user.repo";
import { UserType } from "../types/user.type";

export const getUser = async (id: string): Promise<UserType | null> => {
  return await get(id);
};

export const createUser = async (user: UserDto): Promise<UserType | null> => {
  return await create(user);
};

export const updateUser = async (
  id: string,
  user: UserDto
): Promise<UserType> => {
  return await update(id, user);
};

export const deleteUser = async (id: string): Promise<boolean> => {
  return await remove(id);
};

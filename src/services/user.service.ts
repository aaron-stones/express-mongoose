import { UserCreateDto } from "../dtos/user.create.dto";
import { UserResponseDto } from "../dtos/user.response.dto";
import { userInterface } from "../models/user.model";
import { create, findOne, get, remove, update } from "../repositories/user.repo";

export const getAllUsers =async (): Promise<UserResponseDto[] | null> => {
  return await get();
}

export const getUser = async (id: string): Promise<UserResponseDto | null> => {
  return await findOne(id);
};

export const createUser = async (user: UserCreateDto): Promise<userInterface | null> => {
  return await create(user);
};

export const updateUser = async (
  id: string,
  user: UserCreateDto
): Promise<UserResponseDto> => {
  return await update(id, user);
};

export const deleteUser = async (id: string): Promise<boolean> => {
  return await remove(id);
};

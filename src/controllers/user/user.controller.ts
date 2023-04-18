import { Request, Response } from "express";
import { UserCreateDto } from "../../dtos/user.create.dto";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../../services/user.service";
import { internalServerError } from "../../utils/constants/messages";

export const getSingle = async (req: Request, res: Response) => {
  const id = req.params.userID;

  const result = await getUser(id);

  if (!result) {
    console.error(`Unable to find record ${id}`);

    res.status(404).json();
  }
  else res.status(200).json(result);

};

export const getAll = async (req: Request, res: Response) => {
  const result = await getAllUsers();
  
  if(!result){
    console.error('Unable to find records');

    res.status(404).json();
  }

  else res.status(200).json(result);
}

export const create = async (req: Request, res: Response) => {

  const newUser: UserCreateDto = req.body;
  const result = await createUser(newUser);

  if (!result) {
    console.error("Unable to create record");

    res.status(500).json(internalServerError);
  }
  else res.status(201).json(result);

};

export const update = async (req: Request, res: Response) => {
  const id = req.params.userID;
  const updatedResult: UserCreateDto = req.body;

  const result = await updateUser(id, updatedResult);

  if (!result) {
    console.error("Unable to update record");

    res.status(500).json(internalServerError);
  }
  else res.status(200).json(result);

};

export const remove = async (req: Request, res: Response) => {
    const id = req.params.userID;
  
    const result = await deleteUser(id);
  
    if (!result) {
      console.error("Unable to delete record");
  
      res.status(500).json(internalServerError);
    }
    else res.status(200).json();
};

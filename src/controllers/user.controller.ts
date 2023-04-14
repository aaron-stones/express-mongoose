import { Request, Response } from "express";
import { UserDto } from "../dtos/user.dto";
import {
    createUser,
    deleteUser,
    getUser,
    updateUser,
} from "../services/user.service";

export const getSingle = async (req: Request, res: Response) => {
  const id = req.params.userID;

  const result = await getUser(id);

  if (!result) {
    console.error(`Unable to find record ${id}`);

    res.status(404).json();
  }

  res.status(200).json(result);
};

export const create = async (req: Request, res: Response) => {
  const newUser: UserDto = req.body;
  const result = await createUser(newUser);

  if (!result) {
    console.error("Unable to create record");

    res.status(500).json();
  }

  res.status(201).json(result);
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.userID;
  const updatedResult: UserDto = req.body;

  const result = await updateUser(id, updatedResult);

  if (!result) {
    console.error("Unable to update record");

    res.status(500).json();
  }

  res.status(200).json(result);
};

export const remove = async (req: Request, res: Response) => {
    const id = req.params.userID;
  
    const result = await deleteUser(id);
  
    if (!result) {
      console.error("Unable to delete record");
  
      res.status(500).json();
    }
  
    res.status(200).json(result);
};

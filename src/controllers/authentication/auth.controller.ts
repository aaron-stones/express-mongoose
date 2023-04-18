import { Request, Response } from "express";
import { internalServerError } from "../../utils/constants/messages";
import { createJwt } from "../../utils/helpers/jwtCreate";

export const create = async (req: Request, res: Response) => {
    const id = req.body.userID;
    
    const result = createJwt(id);
    
    if (!result) {
      console.error(`Unable to create jwt with the id: ${id}`);
  
      res.status(500).json(internalServerError);
    }
    else res.status(200).json(result);
  };
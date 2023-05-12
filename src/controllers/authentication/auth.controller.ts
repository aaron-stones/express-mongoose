import { type Request, type Response } from 'express'
import { createJwt } from '../../utils/helpers/jwt'

export const create = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.body.userID

  const result = createJwt(id)

  if (result == null) {
    console.error(`Unable to create jwt with the id: ${id}`)

    res.status(500)
  } else res.status(200).json(result)
}

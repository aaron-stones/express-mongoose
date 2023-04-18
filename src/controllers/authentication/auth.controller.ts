import { type Request, type Response } from 'express'
import { internalServerError } from '../../utils/constants/messages'
import { assertJwt, createJwt } from '../../utils/helpers/jwt'

export const create = async (req: Request, res: Response): Promise<void> => {
  const id: string = req.body.userID

  const result = createJwt(id)

  if (result.length === 0) {
    console.error(`Unable to create jwt with the id: ${id}`)

    res.status(500).json(internalServerError)
  } else res.status(200).json(result)
}

export const getResponse = async (req: Request, res: Response): Promise<void> => {
  const jwt: string = req.body.userID

  const result = assertJwt(jwt)

  if (!result) {
    console.error(`Unable to create jwt with the id: ${jwt}`)

    res.status(500).json(internalServerError)
  } else res.status(200).json(result)
}

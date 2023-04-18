import { type Request } from 'express'
import { assertJwt } from '../../utils/helpers/jwt'

export const AuthMiddlewareJwtAssert = (req: Request): boolean => {
  const auth = req.headers.authorization
  if (auth != null) {
    return assertJwt(auth)
  } else return false
}

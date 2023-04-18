import * as jwt from 'jsonwebtoken'
import { type DecodedJwt } from '../../types/jwt.type'

export const createJwt = (userId: string): string => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_ENCRYPTION_KEY as jwt.Secret,
    {
      expiresIn: '2 days'
    }
  )
}

export const assertJwt = (thing: string): boolean => {
  try {
    jwt.verify(
      thing,
      process.env.JWT_ENCRYPTION_KEY as jwt.Secret
    ) as DecodedJwt
    return true
  } catch (e) {
    console.error('JSON WEB TOKEN FAILURE', e)
    return false
  }
}

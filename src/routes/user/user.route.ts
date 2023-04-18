/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type NextFunction, type Request, type Response } from 'express'
import {
  create,
  getAll,
  getSingle,
  remove,
  update
} from '../../controllers/user/user.controller'
import { AuthMiddlewareJwtAssert } from '../../middleware/authentication/authMiddleware'
import { authenticationClientError } from '../../utils/constants/messages'

const PARAMS = '/:userID'

const UserRouter = express.Router()

UserRouter.use((req: Request, res: Response, next: NextFunction) => {
  if (AuthMiddlewareJwtAssert(req)) next()
  else res.status(403).json(authenticationClientError)
})

UserRouter.get(PARAMS, getSingle)

UserRouter.get('/', getAll)

UserRouter.post('/', create)

UserRouter.put(PARAMS, update)

UserRouter.delete(PARAMS, remove)

export default UserRouter

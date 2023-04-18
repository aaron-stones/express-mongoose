/* eslint-disable @typescript-eslint/no-floating-promises */
import express, { type Express, type NextFunction, type Request, type Response } from 'express'
import { databaseConn } from './src/database/database.conn'
import { routerLogParams, routerLogTime } from './src/middleware/logging/RouterLogging'
import AuthRouter from './src/routes/authentication/auth.route'
import UserRouter from './src/routes/user/user.route'

const app: Express = express()

databaseConn()

app.use((req: Request, res: Response, next: NextFunction) => {
  routerLogTime()
  routerLogParams(req)
  next()
})

app.use(express.json())

app.use('/auth', AuthRouter)

app.use('/user', UserRouter)

export default app

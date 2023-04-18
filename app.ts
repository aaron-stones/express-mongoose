import express, { Express, NextFunction, Request, Response } from 'express';
import { create } from './src/controllers/authentication/auth.controller';
import { databaseConn } from './src/database/database.conn';
import { routerLogParams, routerLogTime } from './src/middleware/logging/RouterLogging';
import UserRouter from './src/routes/user/user.route';

const app: Express = express()

databaseConn();

app.use((req: Request, res: Response, next: NextFunction) => {
    routerLogTime();
    routerLogParams(req);
    next();
});

app.use(express.json())

app.post('/', create);

app.use('/user', UserRouter)

export default app

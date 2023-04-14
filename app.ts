import express, { Express } from 'express';
import { databaseConn } from './src/database/databaseConn';
import UserRouter from './src/routes/user.route';
import { ConnString } from './src/utils/constants/database';

const app: Express = express()

try {
    databaseConn(ConnString);
}
catch(e){
    console.error('FAILED CONN TO DB', e);
}

app.use(express.json())
app.use('/user', UserRouter)

export default app

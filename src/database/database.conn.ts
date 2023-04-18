import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

export const databaseConn = () => {

    const env = process.env.MONGO_URL || 'mongodb://mongo:27017/my-database'

    mongoose.connect(env).then(() => {
        console.log('DB CONN SUCCESSFUL');
    }).catch((e) => {
        console.error('DATABASE CONNECTION', e);
        return process.exit(1);
    });
}


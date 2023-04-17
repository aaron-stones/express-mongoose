import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

export const databaseConn = async (connString:string) => {
    await mongoose.connect(connString);
    console.log('DB CONN SUCCESSFUL');
}


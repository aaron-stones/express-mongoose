import express from 'express';
import {
    create
} from '../../controllers/authentication/auth.controller';

const AuthRouter = express.Router()

AuthRouter.post('/', create)

export default AuthRouter

import express from 'express';
import {
    create,
    getAll,
    getSingle,
    remove,
    update,
} from '../../controllers/user/user.controller';

const PARAMS = '/:userID'

const UserRouter = express.Router()

UserRouter.get(PARAMS, getSingle)

UserRouter.get('/', getAll)

UserRouter.post('/', create)

UserRouter.put(PARAMS, update)

UserRouter.delete(PARAMS, remove)

export default UserRouter

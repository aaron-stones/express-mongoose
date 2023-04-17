import mongoose from "mongoose";
import { mockFunction } from "../utils/helpers/mocks";
import { databaseConn } from "./database.conn";

jest.mock('mongoose')

const logging = jest.fn();

describe('Database Connection test', () => {

    it('should work', async () => {

        const mock = mockFunction(mongoose.connect).mockImplementation(jest.fn());

        await databaseConn('test string');

        expect(mock).toHaveBeenNthCalledWith(1, 'test string');
    })
})
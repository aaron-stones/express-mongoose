import mongoose from 'mongoose'
import { mockFunction } from '../utils/helpers/mocks'
import { databaseConn } from './database.conn'

jest.mock('mongoose')
describe('Database Connection test', () => {
  it('should work', async () => {
    const mock = mockFunction(mongoose.connect).mockImplementation(jest.fn())

    await databaseConn()

    expect(mock).toHaveBeenNthCalledWith(1, 'mongodb://localhost:27017/my-database')
  })
})

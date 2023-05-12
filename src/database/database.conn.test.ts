import mongoose from 'mongoose'
import { mockFunction } from '../utils/helpers/mocks'
import { databaseConn } from './database.conn'

jest.mock('mongoose')
describe('Database Connection test', () => {
  it('should connect to the database successfully', async () => {
    const mock = mockFunction(mongoose.connect).mockImplementation(jest.fn())

    await databaseConn()

    expect(mock).toHaveBeenNthCalledWith(1, 'mongodb://localhost:27017/my-database')
  })

  it('should log an error and exit the process if a connection cannot be made', async () => {
    const mock = mockFunction(mongoose.connect).mockRejectedValue('FAIL')

    await databaseConn()

    expect(mock).toHaveBeenNthCalledWith(1, 'mongodb://localhost:27017/my-database')
  })
})

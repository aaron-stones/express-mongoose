import { type Request } from 'express'
import { mockResponse } from '../../__mocks__/MockResponse'
import { createJwt } from '../../utils/helpers/jwt'
import { mockFunction } from '../../utils/helpers/mocks'
import { create } from './auth.controller'

jest.mock('../../utils/helpers/jwt')

const res = mockResponse()

const req = {
  body: {
    userID: '12345678'
  }
} as unknown as Request

describe('Auth Controller', () => {
  describe('Create', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })
    it('should return a correct authorization header with the corect response codes', async () => {
      const mockCreateJwt = mockFunction(createJwt).mockReturnValue('test-response')

      await create(req, res)

      expect(mockCreateJwt).toHaveBeenNthCalledWith(1, '12345678')
      expect(res.status).toHaveBeenNthCalledWith(1, 200)
      expect(res.json).toHaveBeenNthCalledWith(1, 'test-response')
    })
    it('should return a 500 and an internal server error message if the process fails', async () => {
      const mockCreateJwt = mockFunction(createJwt).mockReturnValue(null)

      await create(req, res)

      expect(mockCreateJwt).toHaveBeenNthCalledWith(1, '12345678')
      expect(res.status).toHaveBeenNthCalledWith(1, 500)
    })
  })
})

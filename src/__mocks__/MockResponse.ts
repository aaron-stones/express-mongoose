/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { type Response } from 'express'

export const mockResponse = (): Response => {
  const res = {} as Response
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

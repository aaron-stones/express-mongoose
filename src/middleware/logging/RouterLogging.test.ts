import { type Request } from 'express'
import { routerLogParams, routerLogTime } from './RouterLogging'

const req = {
  method: 'GET',
  originalUrl: '/test'
} as unknown as Request

describe('Router Logging Middleware', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should call the console to log what was called, through the middleware', () => {
    const consoleSpy = jest.spyOn(global.console, 'log')

    routerLogParams(req)

    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      'App has been called with the method',
      'GET'
    )
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      'App has been called with the location',
      '/test'
    )
  })

  it('should call the console to log the time, through the middleware', () => {
    const consoleSpy = jest.spyOn(global.console, 'log')
    jest.useFakeTimers().setSystemTime(new Date('2020-01-01'))

    routerLogTime()

    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      'App has been called at:',
      'Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time)'
    )
  })
})

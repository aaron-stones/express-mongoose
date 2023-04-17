import { default as supertest } from 'supertest';
import app from '../../app';
import { UserDto } from '../dtos/user.dto';
import { create, findOne, get, remove, update } from '../repositories/user.repo';
import { UserType } from '../types/user.type';
import { mockFunction } from '../utils/helpers/mocks';
import { internalServerError } from '../utils/test/constants/messages';

jest.mock('../repositories/user.repo')
jest.mock('mongoose', () => ({
    connect: jest.fn(),
    Schema: jest.fn(),
    model: jest.fn()
}))

const user:UserType = {
    age: 12,
    email: 'test@test.com',
    name: 'test testington'
}

const createDto:UserDto = {
    name: 'test testington',
    email: 'test@test.com',
    age: 1
}

const request = supertest(app);

describe('User Router', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    describe('getSingle record', () => {
        it('getSingle User endpoint returns a 200 and the correct body when request is successful', async () => {

            const findMock = mockFunction(findOne).mockResolvedValue(user);
            const response = await request.get('/user/1');
    
            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual(user);
            expect(findMock).toHaveBeenNthCalledWith(1, '1');
        })

        it('getSingle User endpoint returns a 404 and no body when request is unsuccessful', async () => {

            const findMock = mockFunction(findOne).mockResolvedValue(null);
            const response = await request.get('/user/1');
    
            expect(response.statusCode).toBe(404);
            expect(response.body).toBe("");
            expect(findMock).toHaveBeenNthCalledWith(1, '1');

        })
    })

    describe('get all records', () => {
        it('get Users endpoint returns a 200 and the correct body when request is successful', async () => {

            const getMock = mockFunction(get).mockResolvedValue([user]);
            const response = await request.get('/user');
    
            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual([user]);
            expect(getMock).toHaveBeenCalledTimes(1);

        })

        it('get Users endpoint returns a 404 and no body when request is unsuccessful', async () => {

            const getMock = mockFunction(get).mockResolvedValue(null);
            const response = await request.get('/user');
    
            expect(response.statusCode).toBe(404);
            expect(response.body).toBe("");
            expect(getMock).toHaveBeenCalledTimes(1);

        })
    })

    describe('create records', () => {
        it('create Users endpoint returns a 200 and the correct body when request is successful', async () => {

            const createMock = mockFunction(create).mockResolvedValue(user);
            const response = (await request.post('/user').send(createDto));

            expect(response.statusCode).toBe(201);
            expect(response.body).toStrictEqual(user);
            expect(createMock).toHaveBeenNthCalledWith(1, createDto);

        })

        it('create Users endpoint returns a 500 and no body when request is unsuccessful', async () => {

            const createMock = mockFunction(create).mockResolvedValue(null);
            const response = (await request.post('/user').send(createDto));

            expect(response.statusCode).toBe(500);
            expect(response.body).toStrictEqual(internalServerError);
            expect(createMock).toHaveBeenNthCalledWith(1, createDto);
        })
    })

    describe('update User records', () => {
        it('update Users endpoint returns a 200 and the correct body when request is successful', async () => {

            const updateMock = mockFunction(update).mockResolvedValue(user);
            const response = (await request.put('/user/1').send(createDto));

            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual(user);
            expect(updateMock).toHaveBeenNthCalledWith(1, '1', createDto);

        })

        it('update Users endpoint returns a 404 and no body when request is unsuccessful', async () => {

            const updateMock = mockFunction(update).mockResolvedValue(null);
            const response = (await request.put('/user/1').send(createDto));

            expect(response.statusCode).toBe(500);
            expect(response.body).toStrictEqual(internalServerError);
            expect(updateMock).toHaveBeenNthCalledWith(1, '1', createDto);
        })
    })

    describe('remove a record endpoint', () => {
        it('remove User endpoint returns a 200 and the correct body when request is successful', async () => {

            const removeMock = mockFunction(remove).mockResolvedValue(true);
            const response = await request.delete('/user/1');
    
            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual('');
            expect(removeMock).toHaveBeenNthCalledWith(1, '1');
        })

        it('remove single User endpoint returns a 404 and no body when request is unsuccessful', async () => {
            const removeMock = mockFunction(remove).mockResolvedValue(false);
            const response = await request.delete('/user/1');
    
            expect(response.statusCode).toBe(500);
            expect(response.body).toStrictEqual(internalServerError);
            expect(removeMock).toHaveBeenNthCalledWith(1, '1');

        })
    })

})
import { UserService } from "./UserService";
import * as jwt from 'jsonwebtoken';


jest.mock('../repositories/UserRepository');
jest.mock('../database', () => {
    initialize: jest.fn()
});
jest.mock('jsonwebtoken');

const mockUserRepository = require('../repositories/UserRepository');
const mockUser = {

            id_user: '123',
            name: 'Pedro',
            email: 'pedro@diobank.com',
            password: '123456'

        }

describe('UserService', () => {
    
    const userService = new UserService(mockUserRepository);

    it('Deve adicionar um novo usuário', async () => {

        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser));

        const response =await userService.createUser('Pedro', 'pedro@diobank.com', '123456');

        expect(mockUserRepository.createUser).toHaveBeenCalled();

        expect(response).toMatchObject(mockUser)

    })


    it('Retornar um token de usuário', async () => {

        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token');

        const token = await userService.getToken('pedro@diobank.com', '123456');
        expect(token).toBe('token');

    })

    it('Deve retorna um erro, caso não encontre um usuário', async () => {

        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null));
        await expect(userService.getToken('invalid@teste.com', '123456')).rejects.toThrowError(new Error('Email ou Senha invalidos'));
        
    })


})
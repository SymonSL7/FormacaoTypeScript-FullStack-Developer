import { User } from "../entities/User";
import { UserService } from "./UserService";

jest.mock('../repositories/UserRepository');
jest.mock('../database', () => {
    initialize: jest.fn()
});

const mockUserRepository = require('../repositories/UserRepository');


describe('UserService', () => {
    
    const userService = new UserService(mockUserRepository);

    it('Deve adicionar um novo usuário', async () => {

        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({

            id_user: '123',
            name: 'Pedro',
            email: 'pedro@diobank.com',
            password: '123456'

        }));

        const response =await userService.createUser('Pedro', 'pedro@diobank.com', '123456');

        expect(mockUserRepository.createUser).toHaveBeenCalled();

        expect(response).toMatchObject({

            id_user: '123',
            name: 'Pedro',
            email: 'pedro@diobank.com',
            password: '123456'

        })

    })


})
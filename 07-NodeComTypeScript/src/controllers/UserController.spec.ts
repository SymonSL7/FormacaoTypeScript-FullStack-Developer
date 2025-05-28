import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {

    createUser: jest.fn(),
    getUser: jest.fn()

}

jest.mock('../services/UserService', () => {
    return {

        UserService: jest.fn().mockImplementation(() => {

            return mockUserService;

        })

    }
});


describe('UserController', () => {


    const userController = new UserController();

    const mockResponse = makeMockResponse();

    it('Deve adicionar um novo usuário', () => {

        const mockRequest = {
            
            body: {
                name: 'Pedro',
                email: 'pedro@diobank.com',
                password: '123456'
            }

        } as Request

        userController.createUser(mockRequest, mockResponse);

        expect(mockResponse.state.status).toBe(201)

        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado'})

    })


    it('Deve retornar erro caso o usuário não informe o nome', () => {

        const mockRequest = {
            body: {
                name: '',
                email: 'pedro@diobank.com',
                password: '123456'
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400);

        expect(mockResponse.state.json).toMatchObject({message: 'Bad Request! Todos os campos são obrigatórios!'})

    })


    it('Deve retornar erro caso o usuário não informe o email', () => {

        const mockRequest = {
            body: {
                name: 'Pedro',
                email: '',
                password: '123456'
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400);

        expect(mockResponse.state.json).toMatchObject({message: 'Bad Request! Todos os campos são obrigatórios!'})

    })


    it('Deve retornar erro caso o usuário não informe a senha', () => {

        const mockRequest = {
            body: {
                name: 'Pedro',
                email: 'pedro@diobank.com',
                password: ''
            }
        } as Request

        const mockResponse = makeMockResponse();

        userController.createUser(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(400);

        expect(mockResponse.state.json).toMatchObject({message: 'Bad Request! Todos os campos são obrigatórios!'})

    })

    it('Deve retornar o usuário com o userId informado', () => {

        const mockRequest = makeMockRequest({

            params: {
                userId: '123456',
            }

        })

        userController.getUser(mockRequest, mockResponse);
        expect(mockUserService.getUser).toHaveBeenCalledWith('123456');
        expect(mockResponse.state.status).toBe(200);

    })

})
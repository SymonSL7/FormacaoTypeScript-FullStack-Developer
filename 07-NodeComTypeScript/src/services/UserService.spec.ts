import { User, UserService } from "./UserService"

describe('UserService', () => {
    
    const mockDb: User[] = [];

    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {

        const mockConsole = jest.spyOn(global.console, 'log');

        userService.createUser('Pedro', 'pedro@diobank.com');

        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb);

    })

    it('Deve retornar todos os usuários', () => {

        const mockConsole = jest.spyOn(global.console, 'log');

        userService.getAllUsers();

        expect(mockConsole).toHaveBeenCalledWith('DB Atual', mockDb);

    })

    it('Deve deletar um usuário', () => {

        const mockConsole = jest.spyOn(global.console, 'log');

        userService.deleteUser('pedro@diobank.com');

        expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb);

    })

})
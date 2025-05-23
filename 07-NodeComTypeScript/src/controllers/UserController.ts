import { UserService } from '../services/UserService';
import { Request, Response } from 'express';

export class UserController {
    private userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }

    createUser = (request: Request, response: Response): void => {
        const user = request.body;

        if (!user.name || !user.email) {
            response.status(400).json({ message: 'Bad Request! Nome obrigatório!' });
            return;
        }

        this.userService.createUser(user.name, user.email);
        response.status(201).json({ message: 'Usuário criado' });
    }

    getAllUsers = (request: Request, response: Response): void => {
        const users = this.userService.getAllUsers();
        response.status(200).json(users);
    }

    deleteUser = (request: Request, response: Response): void => {
        const { email } = request.body;

        if (!email) {
            response.status(400).json({ message: 'Bad Request! Email obrigatório!' });
            return;
        }

        this.userService.deleteUser(email);
        response.status(200).json({ message: 'Usuário deletado' });
    }
}
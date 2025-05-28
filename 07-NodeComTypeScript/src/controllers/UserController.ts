import { UserService } from '../services/UserService';
import { Request, Response } from 'express';

export class UserController {
    private userService: UserService;

    constructor(userService = new UserService()) {

        this.userService = userService;
        
    }

    createUser = (request: Request, response: Response): void => {

        const user = request.body;

        if (!user.name || !user.email || !user.password) {
            response.status(400).json({ message: 'Bad Request! Todos os campos são obrigatórios!' });
            return;
        }

        this.userService.createUser(user.name, user.email, user.password);
        response.status(201).json({ message: 'Usuário criado' });

    }

    getUser = async (request: Request, response: Response) => {

        const { userId } = request.params;
        const user = await this.userService.getUser(userId);
        
        response.status(200).json( {
            userId: user?.id_user,
            name: user?.name,
            email: user?.email
        } );

    }

    deleteUser = (request: Request, response: Response) => {

        const user = request.body;
        return response.status(200).json({message: 'Usuário deletado!'});

    }
}
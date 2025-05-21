import { UserService } from './../services/UserService';
import { Request, Response } from 'express';


export class UserController {

    createUser = (request: Request, response: Response) => {
        const userService =  new UserService()
        const user = request.body;

        if(!user.name ){
            return response.status(400).json({massage: 'Bad Request! Nome obrigatório!'})
        }
        userService.createUser(user.name, user.email)
        response.status(201).json({ message: 'Usuário criado' });
    }

    getAllUsers = (request: Request, response: Response) => {

        const userService = new UserService();
        
        const users = userService.getAllUsers();

        return response.status(200).json( users );
    }

}


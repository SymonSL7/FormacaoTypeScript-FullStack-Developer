// src/routes.ts
import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { LoginController } from './controllers/LoginController';
import { verifyAuth } from './midlleware/verifyAuth';

export const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post('/user', (request, response) => {
     userController.createUser(request, response); 
    });

router.get('/user/:userId', verifyAuth, (request, response) => {
     userController.getUser(request, response); 
    });
    
router.delete('/user', (request, response) => { 
    userController.deleteUser(request, response); 
});

router.post('/login', (request, response) => { 
    loginController.login(request, response)
});
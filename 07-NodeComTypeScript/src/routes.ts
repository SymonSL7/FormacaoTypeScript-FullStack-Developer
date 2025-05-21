// src/routes.ts
import { Router } from 'express';
import { UserController } from './controllers/UserController';

export const router = Router();
const userController = new UserController();

router.post('/user', (request, response) => {
     userController.createUser(request, response); 
    });

router.get('/user', (request, response) => {
     userController.getAllUsers(request, response); 
    });
    
router.delete('/user', (request, response) => { 
    userController.deleteUser(request, response); 
});
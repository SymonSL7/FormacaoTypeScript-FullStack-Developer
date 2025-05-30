import express from 'express';
import { Request, Response } from 'express';
import { router } from './routes';
import 'reflect-metadata';
import { AppDataSource } from './database';

const server = express();


server.use(express.json());

server.use(router);

server.get('/', (request: Request, response: Response) => {
    response.status(200).json({ message: 'DioBank API' });
});



server.listen(5000, () => console.log('Server on'));
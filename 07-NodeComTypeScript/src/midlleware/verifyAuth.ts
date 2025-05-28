import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function verifyAuth(request: Request, response: Response, next: NextFunction): void {
    const authToken = request.headers.authorization;

    if (!authToken) {
        response.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const [, token] = authToken.split(' ');

    try {
        const { sub } = verify(token, '123456789');
        console.log('Token for user ', sub);
        next();
    } catch (error) {
        response.status(401).json({ message: 'Unauthorized' });
    }
}
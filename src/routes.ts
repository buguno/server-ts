import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser('Bruno', 'brunnodesouzabezerra@gmail.com', '123')
    return response.json({ message: 'Hello World!' });
}

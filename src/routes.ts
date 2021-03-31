import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Bruno',
        email: 'brunnodesouzabezerra@gmail.com',
        password: '123',
        techs: [
            'Python',
            'Git',
            {title: 'Python', experience: 80}
        ]
    });

    return response.json({ message: 'Hello World!' });
}

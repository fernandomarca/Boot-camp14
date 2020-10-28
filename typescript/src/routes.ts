import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function list(request: Request, response: Response) {

  const user = createUser({
    name: "fernando",
    email: "fernando@example.com",
    password: "1234",
    techs: [
      'react',
      "react-native",
      {
        title: 'Javascript',
        experience: 100
      },
      "node"
    ]
  });

  return response.json({ message: 'hello world' });
}
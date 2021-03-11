import { Request, Response } from 'express';
import User from '../models/User.Model';

const user = new User();

export const getUsers = async ( req: Request, res: Response ): Promise<Response> => { // 9.21, 8:50
    const data = await user.getUsers();
    return res.json(data);
}

export const getUser = ( req: Request, res: Response ) => {
    const { userId } = req.params;
    res.json({
        data: 'get usuario',
        userId: userId
    });
}

export const postUser = ( req: Request, res: Response ) => {
    const { firstName, age } = req.body;

    res.json({
        msg: 'data user',
        firstName: firstName,
        age: age
    });
}

export const putUser = ( req: Request, res: Response ) => {
    const { userId } = req.params;
    const { firstName, age } = req.body;

    res.json({
        msg: 'data user',
        id: userId,
        firstName: firstName,
        age: age
    });
}

export const deleteUser = ( req: Request, res: Response ) => {
    const { userId } = req.params;
    res.json({
        data: 'delete usuario',
        userId: userId
    });
}
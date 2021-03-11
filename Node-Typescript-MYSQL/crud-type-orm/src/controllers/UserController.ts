import { Request , Response } from 'express';
import { getRepository } from 'typeorm';// Para traernos la tabla
import { User } from '../entity/User';

export const getUsers = async (req: Request , res: Response): Promise<Response> => {
    const userdata = await getRepository(User).find();
    return res.status(200).json(userdata);
}

export const addUser = async (req: Request , res:Response): Promise<any> => {
    let user = await getRepository(User).create(req.body);
    let success = await getRepository(User).save(user);
    res.status(200).send({
        status: true ,
        message: 'Usuario ' + req.params.firstName + ' creado con exito' ,
        data: success
    });
    res.end();
}

export const getUser = async (req: Request , res: Response): Promise<any> => {
    let user = await getRepository(User).findOne(req.params.id);
    res.status(200).send(user);
    res.end();
}

export const updateUser = async (req: Request , res:Response): Promise<any> => {
    let { userId } = req.params;
    let user = await getRepository(User).findOne(userId);
    if (user) {
        // Merge remplaaza los datos update en resumen
        getRepository(User).merge(user , req.body);

        // Luego guardo
        let results = await getRepository(User).save(user);

        // Envio respuesta
        res.status(200).send({
            status: true ,
            message: 'Usuario con el id ' + userId + ' actualizado con exito' ,
            data: results
        });
        res.end();
    } else {
        res.status(400).send({
            status: false ,
            message: 'Usuario no encontrado'
        });
        res.end();
    }
}

export const deleteUser = async (req: Request , res: Response): Promise<any> => {
    const { userId } = req.params;
    let success = await getRepository(User).delete(userId);
    res.status(200).send({
        status: true ,
        message: 'Usuario con el id ' + userId + ' eliminado con exito' ,
        success: success
    });
    res.end();
}
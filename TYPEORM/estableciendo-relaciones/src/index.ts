import "reflect-metadata";
import {Connection, createConnection , getRepository, Repository} from "typeorm";
import {User} from "./entity/User";
import {Detail} from './entity/Details';
import {Gender} from './entity/Gender';

(async () => {
    try {
        const connection: Connection = await createConnection();

        const userRepo: Repository<User> = connection.getRepository(User);
        const detailRepo: Repository<Detail> = connection.getRepository(Detail);
        const genderRepo: Repository<Gender> = connection.getRepository(Gender);

        /*
        // Crear Generos
        const female = await genderRepo.save([
            { gender: 'Female' , abrev: 'F' } , 
            { gender: 'Male', abrev: 'M' } , 
            { gender: 'Others' , abrev: 'O' }]);

        // Crear Detalles
        const firstDetail = new Detail();
        firstDetail.detail = 'First Detail' ,
        firstDetail.address = 'First Detail Address'

        // Crear Usuarios 
        const newUser = await userRepo.save({
            details:  firstDetail ,
            firstName: 'Name One' ,
            lastName: 'LastName One' ,
            age: 20 ,
            emailUser: 'test1@gmail.com'

        });*/
        
        // Mostrar usuarios 
        const users = await userRepo.find();
        console.log(users);
    } catch (ex) {
        console.log(ex.message);
    }
})();

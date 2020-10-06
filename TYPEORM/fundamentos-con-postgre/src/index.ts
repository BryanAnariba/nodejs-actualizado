import "reflect-metadata";
import {Connection, createConnection, getRepository, Repository} from "typeorm";
import { User , Details } from './entity';

(async () => {
    const connection: Connection = await createConnection();

    // Manera de instanciar osea acceder al respositorio User y obtener todos los CRUD OPERATIONS
    const userRepo: Repository<User> = connection.getRepository(User);
    const detailsRepo: Repository<Details> = connection.getRepository(Details);

    // Crear usuario
    const createUser = await userRepo.save({
        firstName: 'Test Name Three' ,
        lastName: 'Test LastName Three' ,
        age: 19 ,
        isStudent: true ,
        phoneNumber: null ,
        carrer: 'Doctor' ,
        average: 90
    });

    console.log('Usuario insertado con exito la data almacenada fue ->')
    console.log(createUser);
})();








// Creamos una conexion en este caso asyncrona por que hay peticiones adentro a ajecutar
/*createConnection().then(async connection => {

                                                            // Query 1
    console.log("Inserting a new user into the database...");

    // creamos una instancia de la entidad User
    const user = new User();
    const detail = new Details();

    // Rellenamos con datos
    user.firstName = "Maria Fernana";
    user.lastName = "Sanchez Anariba";
    user.age = 21;
    user.isStudent = true;
    user.phoneNumber = "96083927";
    user.carrer = "Lawyer";
    user.average = 90;

    detail.address = "My Third address";


    // preparamos para guardar
    await connection.manager.save(user);
    await connection.manager.save(detail);

    // notificamos
    console.log("Saved a new user with id: " + user.id);
    console.log("Direccion guardada con exito id -> " + detail.id);

                                                            // Query 2 
    console.log("Loading users from the database...");
    // llamamos a los usuarios almacenados en postgre
    const users = await connection.manager.find(User);
    const details = await connection.manager.find(Details);
    console.log("Loaded users: ", users);
    console.log("Loaded Details: ", details);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));*/

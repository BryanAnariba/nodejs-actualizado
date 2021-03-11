import { createConnection } from 'mysql2';

export const connect = async () => {
    const connection = await createConnection({
        host: 'localhost:3307' ,
        user: 'root' ,
        password: 'root' ,
        database: 'users-db'
    });

    return connection;
}
import express, { Application } from 'express';
import cors from 'cors';
import userR from './routes/UserRoutes';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();
// key dbAdmin -> postgre
// port Postgre -> 5432
export class App {
    private app: Application;

    constructor (private port?: number | string) {
        this.app = express();

        // Con esto ya se crea todo ya que lee el archivo ormconfig.json
        createConnection();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set('port', this.port || process.env.BACKEND_PORT || 4000);
    }

    middlewares (): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes (): void {
        this.app.use('/users' , userR);
    }

    async startingSever () {
        await this.app.listen(this.app.get('port'));
        console.log('Server started on port -> ' + this.app.get('port'));
    }
}

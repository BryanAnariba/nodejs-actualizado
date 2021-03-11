import express, { Application } from 'express';
import userRoutes from '../routes/User.Routes';
import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string | number;
    private apiPaths = {
        users: '/api/users'
    };

    constructor () {
        this.app = express();
        this.port = process.env.BACKEND_PORT || 3600;
        
        this.middlewares();
        this.routes();
        this.staticFiles();
    }
    
    routes (): void {
        this.app.use( this.apiPaths.users , userRoutes )
    }

    middlewares (): void {
        // Configurar corst y lectura del body, carpeta publica
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));
    }

    staticFiles (): void {
        this.app.use(express.static(join(__dirname, 'public/img/uploads')));
    }


    async listen (): Promise<any> {
        await this.app.listen(this.port);
        console.log(`Server started on port ${ this.port }`);
    }
}

export default Server;
const mongoose = require('mongoose');
const BD = 'login-and-register';
const PORT = '27017';
const HOST = 'localhost';
const { BD_APP , APP_HOST , APP_PORT } = process.env;
const URL_CONNECTION = `mongodb://${ APP_HOST }:${ APP_PORT }/${ BD_APP }`;

class Connection {
    constructor () {
        this.connectMe();
    }


    connectMe () {
        mongoose.connect(URL_CONNECTION , {
            useUnifiedTopology: true ,
            useNewUrlParser: true
        })
        .then((success) => {
            console.log('MongoDB is Connected');
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

module.exports = new Connection();
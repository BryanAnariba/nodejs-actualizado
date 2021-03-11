require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
require('./data-base');

// Settings
app.set('port' , process.env.PORT || 3500);
app.set('views' , path.join(__dirname, 'views'));
app.engine('.hbs' , hbs({
    layoutsDir: path.join(app.get('views'), 'layouts') ,
    partialsDir: path.join(app.get('views'), 'partials') ,
    extname: '.html' 
}));
app.set('view engine' , '.html');

// Midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global Variables

// Routes
app.get('/' , function (req , res) {
    res.send();
    res.end();
});

// Static Files
app.use(express.static(path.join(__dirname , 'public')));

// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server started on port -> ' + app.get('port'));
});
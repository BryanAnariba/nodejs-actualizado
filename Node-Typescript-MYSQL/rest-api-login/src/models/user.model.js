const { Schema , model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String ,
        require: true
    } , 
    email: {
        type: String , 
        require: true
    } ,
    password: { // hay que cifrarla con bcryptjs
        type: String ,
        require: true
    }
} , {
    timestamps: true
});

module.exports = model('users' , userSchema);
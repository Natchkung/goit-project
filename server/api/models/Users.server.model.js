const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    fnamelname: String,
    mail: String,
    phonenumber: String,
    username: String,
    password: String,
    money: {
        type: Number,
        default: 300
    },
    points: {
        type: Number,
        default: 0
    }, 
    trees: {
        type: Number,
        default: 0
    }, 
    avatar:{
        type: String,
        default: 'noavatar.jpg'
    }
    },
    {versionKey: false,timestamps:true}
);
const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;
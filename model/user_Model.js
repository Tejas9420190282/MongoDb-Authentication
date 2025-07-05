
// user_Model.js

const { default: mongoose } = require("mongoose");

const user_Scema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is mandatory"]
    },
    email : {
        type : String,
        required : [true, "Email is mandatory"],
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : {
        type : String,
        required : [true, "Password is requird"],
    },
}) 

const user = mongoose.model(`user`, user_Scema);

exports.user = user;


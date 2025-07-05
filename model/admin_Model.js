const { default: mongoose } = require("mongoose");

const admin_Scema = new mongoose.Schema({
    name : {
        type : String,
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

const admin = mongoose.model('admin', admin_Scema);

exports.admin = admin;

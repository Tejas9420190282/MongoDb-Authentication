
// db.js

const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        
        await mongoose.connect(`mongodb://127.0.0.1:27017/auth`);

        console.log(`Database connected successfully`.bgGreen);

    } catch (error) {
        
        console.log(`Error in database Connection`.bgRed);
    }
}

exports.connectDB = connectDB;


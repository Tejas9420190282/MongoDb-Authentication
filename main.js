
// main.js

const express = require('express');
const colors = require('colors');
const { connectDB } = require('./config/db');
const { admin_Register_Router } = require('./router/admin/admin_Register_Router');
const { user_Register_Router } = require('./router/user/user_Register_Router');
const { login_Router } = require('./router/login_Router');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(login_Router);

// admin 
app.use(admin_Register_Router);

// user
app.use(user_Register_Router);

const PORT = 7878;

const startServer = async () => {
    try {

        await connectDB();

        app.listen(PORT, () => {

            console.log(`Server running on http://localhost:${PORT}`.bgGreen);
        });
        
    } catch (error) {
        
        console.log(`Error in statServer : ${error.message}`.bgRed);
    }
} 

startServer();


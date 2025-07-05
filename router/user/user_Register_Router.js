
const express = require('express');
const { user_Register_Controller } = require('../../controller/user/user_Register_Controller');

const user_Register_Router = express.Router();

user_Register_Router.post("/user-register", user_Register_Controller);

exports.user_Register_Router = user_Register_Router;
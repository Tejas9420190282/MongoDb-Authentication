
const express = require('express');
const { login_Controller } = require('../controller/login_Controller');

const login_Router = express.Router();

login_Router.post(`/login`, login_Controller);

exports.login_Router = login_Router;            



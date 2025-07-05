
const express = require('express');
const { admin_Register_Controller } = require('../../controller/admin/admin_Register_Controller');

const admin_Register_Router = express.Router();

admin_Register_Router.post('/admin-register', admin_Register_Controller);

exports.admin_Register_Router = admin_Register_Router;
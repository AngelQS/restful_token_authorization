const express = require('express');
const AuthCtrl = require('../controllers/AuthController');
const Router = express.Router();

Router.post('/register', AuthCtrl.register);
Router.post('/login', AuthCtrl.login);

module.exports = Router;

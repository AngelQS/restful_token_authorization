const express = require('express');
const UserCtrl = require('../controllers/UserController');

const Router = express.Router();

Router.get('/', UserCtrl.index) // api.com/user/ Index: Listar todos los usuarios
  .post('/', UserCtrl.create) // api.com/user/ Create: Crear un nuevo usuario
  .get('/:key/:value', UserCtrl.find, UserCtrl.show) // api.com/user/_id/{user_id} Show: Muestra un usuario en específico mediante su columna _id
  .put('/:key/:value', UserCtrl.find, UserCtrl.update) // api.com/user/name/{user_name} Update: Actualizar un usuario en especifico mediante su columna name
  .delete('/:key/:value', UserCtrl.find, UserCtrl.remove); // api.com/user/username/{user_username} Remove: Eliminar un usuario en específico mediante su columna username

module.exports = Router;

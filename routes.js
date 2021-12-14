const express = require('express');

const UserController = require('./src/controllers/UserController');
const MessageController = require('./src/controllers/MessageController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.findById);
routes.delete('/users/:id', UserController.delete);

routes.post('/users/:user_id/message', MessageController.store);
routes.get('/users/:user_id/message', MessageController.index);

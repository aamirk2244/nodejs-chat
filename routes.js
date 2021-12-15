const express = require('express');

const MessageController = require('./src/controllers/MessageController');

const routes = express.Router();

routes.post('/messages', MessageController.store);
routes.get('/messages', MessageController.index);
routes.delete('/messages', MessageController.delete);

module.exports = routes;

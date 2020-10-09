const express = require('express');

const UserController = require('../src/controllers/UserController');
const CaronaController = require('../src/controllers/caronaController');
const SessionController = require("../src/controllers/SessionController");

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.post('/caronas', CaronaController.create);
routes.get('/caronas', CaronaController.index);
routes.delete('/caronas/:id', CaronaController.delete);

routes.post('/sessions', SessionController.create);

module.exports = routes;
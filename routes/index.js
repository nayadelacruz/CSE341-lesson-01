const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/', controller.nameFunction);

module.exports = routes;
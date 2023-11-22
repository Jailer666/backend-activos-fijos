const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const institutionsRouter = require('./institutions.router');
const contratosRouter = require('./contratos.router');
const stateContratosRouter = require('./state-contrato.router');
const filesRouter=require('./files.router');
const seguimientosRouter=require('./seguimientos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/institutions', institutionsRouter);
  router.use('/contratos', contratosRouter);
  router.use('/state-contratos', stateContratosRouter);
  router.use('/files', filesRouter);
  router.use('/seguimientos', seguimientosRouter);
}

module.exports = routerApi;

const express = require('express');


const usersRouter = require('./users.router');

const formulariosRouter=require('./formularios.router');
const detalleFormularioRouter=require('./detalle-formulario.router');
const activosFijosRouter=require('./activo-fijo.router');

const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/formularios', formulariosRouter);
  router.use('/detalle-formulario', detalleFormularioRouter);
  router.use('/activos-fijos', activosFijosRouter);
  router.use('/auth', authRouter);
  router.use('/profile', profileRouter);
}

module.exports = routerApi;

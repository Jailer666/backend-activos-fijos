const Joi = require('joi');

const id = Joi.number().integer();
const version = Joi.string();

const createDetalleActivoFijoSchema = Joi.object({
  version:version.required()
});

const updateDetalleActivoFijoSchema = Joi.object({
  version:version.required()
});

  const getDetalleActivoFijoSchema = Joi.object({
    id: id.required(),
  });

  module.exports = { createDetalleActivoFijoSchema, updateDetalleActivoFijoSchema, getDetalleActivoFijoSchema }

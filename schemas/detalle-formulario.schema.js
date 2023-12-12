const Joi = require('joi');
const id = Joi.number().integer();
const tipo = Joi.string();
const codFormulario = Joi.string();
const formularioId = Joi.number().integer();

const createDetalleFormularioSchema = Joi.object({
  tipo: tipo.required(),
  codFormulario: codFormulario.required(),
  formularioId
});

const updateDetalleFormularioSchema = Joi.object({
  tipo: tipo.required(),
  codFormulario: codFormulario.required(),
  formularioId
});

const getDetalleFormularioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDetalleFormularioSchema, updateDetalleFormularioSchema, getDetalleFormularioSchema }

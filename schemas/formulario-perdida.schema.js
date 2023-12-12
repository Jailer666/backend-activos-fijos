const Joi = require('joi');
const id = Joi.number().integer();
const codigo = Joi.string();
const departamento = Joi.string();
const provincia = Joi.string();
const responsable= Joi.string();
const usuarioId = Joi.integer();


const createFormularioPerdidaSchema = Joi.object({
  fecha: fecha.required(),
  userId: userId.required(),
  codigo,
  departamento,
  provincia,
  responsable,
  usuarioId,
  
});

const updateFormularioPerdidaSchema = Joi.object({
  fecha,
  userId,
  codigo,
  departamento,
  provincia,
  responsable,
  usuarioId,
  
});

const getFormularioPerdidaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createFormularioPerdidaSchema, updateFormularioPerdidaSchema, getFormularioPerdidaSchema }

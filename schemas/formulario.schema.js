const Joi = require('joi');
const id = Joi.number().integer();
const unidadPrincipal = Joi.string();
const unidad = Joi.string();
const departamento = Joi.string();
const lugar = Joi.string();
const responsableSaliente = Joi.string();
const responsableEntrante = Joi.string();
const cargoSaliente = Joi.string();
const cargoEntrante = Joi.string();
const oficinaEntrante = Joi.string();
const oficinaSaliente = Joi.string();
const fecha = Joi.date();
const observaciones = Joi.string();
const userId = Joi.number().integer();

const createFormularioSchema = Joi.object({
  fecha: fecha.required(),
  userId: userId.required(),
  unidadPrincipal,
  unidad,
  departamento,
  lugar,
  responsableSaliente,
  responsableEntrante,
  cargoSaliente,
  cargoEntrante,
  oficinaEntrante,
  oficinaSaliente,
  observaciones

});

const updateFormularioSchema = Joi.object({
  fecha,
  userId,
  unidadPrincipal,
  unidad,
  departamento,
  lugar,
  responsableSaliente,
  responsableEntrante,
  cargoSaliente,
  cargoEntrante,
  oficinaEntrante,
  oficinaSaliente,
  observaciones
});

const getFormularioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createFormularioSchema, updateFormularioSchema, getFormularioSchema }

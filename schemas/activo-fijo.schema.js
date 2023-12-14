const Joi = require('joi');
const id = Joi.number().integer();
const codigo = Joi.string();
const fechaAlta = Joi.date();
const descripcion = Joi.string();
const estado = Joi.string();
const observaciones = Joi.string();
const responsable = Joi.string();
const tipo = Joi.string();
const ubicacion = Joi.string();
const detalleFormularioId = Joi.number().integer();

const createActivoFijoSchema = Joi.object({
  codigo: codigo.required(),
  fechaAlta: fechaAlta.required(),
  descripcion,
  estado: estado.required(),
  observaciones,
  responsable: responsable.required(),
  tipo: tipo.required(),
  ubicacion: ubicacion.required(),
  detalleFormularioId
});

const updateActivoFijoSchema = Joi.object({
    observaciones,
    detalleFormularioId
  });

  const getActivoFijoSchema = Joi.object({
    id: id.required(),
  });

  module.exports = { createActivoFijoSchema, updateActivoFijoSchema, getActivoFijoSchema }

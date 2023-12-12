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
  codigo:codigo.requerid(),
  fechaAlta:fechaAlta.requerid(),
  estado:estado.requerid(),
  responsable:responsable.requerid(),
  tipo:tipo.requerid(),
  ubicacion:ubicacion.requerid(),
  descripcion,
  observaciones

});

const updateActivoFijoSchema = Joi.object({
    observaciones,
    detalleFormularioId
  });

  const getActivoFijoSchema = Joi.object({
    id: id.required(),
  });

  module.exports = { createActivoFijoSchema, updateActivoFijoSchema, getActivoFijoSchema }

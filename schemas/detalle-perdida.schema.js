const Joi = require('joi');
const id = Joi.number().integer();
const condicion = Joi.string();
const estadoArma = Joi.string();
const responsable = Joi.string();
const ciResponsable = Joi.string();
const nroInformeResponsable = Joi.string();
const situacion = Joi.string();
const nroCasoInvestigacion = Joi.string();
const observaciones = Joi.string();

const formularioPerdidaId = Joi.number().integer();

const createDetallePerdidaSchema = Joi.object({
  condicion, estadoArma, responsable, ciResponsable, nroCasoInvestigacion, situacion, nroInformeResponsable,
  observaciones, formularioPerdidaId

});

const updateDetallePerdidaSchema = Joi.object({
  condicion, estadoArma, responsable, ciResponsable, nroCasoInvestigacion, situacion, nroInformeResponsable,
  observaciones
});

const getDetallePerdidaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createDetallePerdidaSchema, updateDetallePerdidaSchema, getDetallePerdidaSchema }

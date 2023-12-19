const Joi = require('joi');
const id = Joi.number().integer();
const codigo = Joi.string();
const departamento = Joi.string();
const provincia = Joi.string();
const responsable= Joi.string();
const condicion= Joi.string();
const estadoArma= Joi.string();
const responsables= Joi.string();
const ciResponsable= Joi.string();
const nroInformeResponsable= Joi.string();
const situacion= Joi.string();
const nroCasoInvestigacion = Joi.string();
const observaciones= Joi.string();
const armaId = Joi.integer();


const createFormularioPerdidaSchema = Joi.object({
  fecha: fecha.required(),
  userId: userId.required(),
  codigo,
  departamento,
  provincia,
  responsable,
  condicion,
  estadoArma,
  responsables,
  ciResponsable,
  nroInformeResponsable,
  situacion,
  nroCasoInvestigacion,
  observaciones,
  armaId,
  
});

const updateFormularioPerdidaSchema = Joi.object({
  fecha,
  userId,
  codigo,
  departamento,
  provincia,
  responsable,
  condicion,
  estadoArma,
  responsables,
  ciResponsable,
  nroInformeResponsable,
  situacion,
  nroCasoInvestigacion,
  observaciones,
  armaId,
  
});

const getFormularioPerdidaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createFormularioPerdidaSchema, updateFormularioPerdidaSchema, getFormularioPerdidaSchema }

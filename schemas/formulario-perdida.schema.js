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
const fecha=Joi.date();
const armaId = Joi.number().integer();


const createFormularioPerdidaSchema = Joi.object({
  fecha: fecha.required(),
  armaIdId: armaId.required(),
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
  
  
});

const updateFormularioPerdidaSchema = Joi.object({
  fecha,
  armaId,
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

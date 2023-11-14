const Joi = require('joi');

const id = Joi.number().integer();
const number = Joi.string().min(7);
const startDate = Joi.date();
const finishDate = Joi.date();
const cantPolice=Joi.number().integer();
const stateContratoId=Joi.number().integer();
const institutionId=Joi.number().integer();

const createContratoSchema = Joi.object({
  number: number.required(),
  startDate: startDate.required(),
  finishDate: finishDate.required(),
  cantPolice:cantPolice.required(),
  stateContratoId:stateContratoId.required(),
  institutionId:institutionId.required()
});

const updateContratoSchema = Joi.object({
  number: number,
  startDate: startDate,
  finishDate: finishDate,
  cantPolice:cantPolice,
  stateContratoId:stateContratoId,
  institutionId
});

const getContratoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createContratoSchema, updateContratoSchema, getContratoSchema }

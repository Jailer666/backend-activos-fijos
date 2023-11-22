const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(7);

const createStateContratoSchema = Joi.object({
  name:name.required()
});

const updateStateContratoSchema = Joi.object({
  name:name.required()
});

const getStateContratoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createStateContratoSchema, updateStateContratoSchema, getStateContratoSchema }

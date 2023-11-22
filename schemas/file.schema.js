const Joi = require('joi');

const id = Joi.number().integer();
const type = Joi.string().min(7);
const location=Joi.string();
const contratoId=Joi.number().integer();

const createFileSchema = Joi.object({
  name:type.required(),
  location:location.required(),
  contratoId:contratoId.required()
});

const updateFileSchema = Joi.object({
  name:type.required(),
  location:location.required(),
  contratoId
});

const getFileSchema = Joi.object({
  id: id.required(),
});

module.exports = { createFileSchema, updateFileSchema, getFileSchema }

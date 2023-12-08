const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5);
const nit = Joi.string().alphanum().min(5);
const address = Joi.string();
const gerente= Joi.string().min(5);
const gerenteCi=Joi.string().alphanum().min(7);
const subgerente= Joi.string().min(5);
const subgerenteCi=Joi.string().alphanum().min(7);
const description=Joi.string();
const email=Joi.string().email();
const userId=Joi.number().integer();

const createInstitutionSchema = Joi.object({
  name: name.required(),
  nit: nit.required(),
  address: address.required(),
  gerente:gerente.required(),
  gerenteCi:gerenteCi.required(),
  subgerente ,
  subgerenteCi,
  description,
  email: email.required(),
  userId:userId.required()
});

const updateInstitutionSchema = Joi.object({
  name:name,
  nit:nit,
  address:address,
  gerente:gerente,
  gerenteCi:gerenteCi,
  subgerente:subgerente,
  subgerenteCi:subgerenteCi,
  description:description,
  email: email,
  userId,
});

const getInstitutionSchema = Joi.object({
  id: id.required(),
});

module.exports = { createInstitutionSchema, updateInstitutionSchema, getInstitutionSchema }

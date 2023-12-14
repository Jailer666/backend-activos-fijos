const Joi = require('joi');

const id = Joi.number().integer();
const username = Joi.string().min(5);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)

// query
const limit=Joi.number().integer();
const offset=Joi.number().integer();

const createUserSchema = Joi.object({
  username:username.required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  email: email,
  username:username,
  password,
  role:role
});
const getUserSchema = Joi.object({
  id: id.required(),
});

const queryUserSchema = Joi.object({
  limit,
  offset
});


module.exports = { createUserSchema, updateUserSchema, getUserSchema, queryUserSchema}

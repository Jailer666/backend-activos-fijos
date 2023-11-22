const Joi = require('joi');
// En este esquema estael esquema de seguimiento, asi como el esquema de la tabla pivote contratos_seguimientos
const id=Joi.number().integer();
//para seguimientos
const date=Joi.date();

//para contratos_seguiminetos
const seguimientoId=Joi.number().integer();
const contratoId=Joi.number().integer();
const amount=Joi.number().integer().min(1);

const getSeguimientoSchema=Joi.object({
  id:id.required(),
});

const createSeguimientoSchema=Joi.object({
    date:date.required(),
});


const addItemSchema=Joi.object({
  seguimientoId:seguimientoId.required(),
  contratoId:contratoId.required(),
  amount: amount.required()
});


module.exports={getSeguimientoSchema,createSeguimientoSchema,addItemSchema};


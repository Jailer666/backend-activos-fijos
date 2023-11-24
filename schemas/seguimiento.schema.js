const Joi = require('joi');
// En este esquema estael esquema de seguimiento, asi como el esquema de la tabla pivote contratos_seguimientos
const id=Joi.number().integer();
//para seguimientos
const date=Joi.date();

//query
const date_min=Joi.date();
const date_max=Joi.date();

//para contratos_seguiminetos
const seguimientoId=Joi.number().integer();
const contratoId=Joi.number().integer();


const getSeguimientoSchema=Joi.object({
  id:id.required(),
});

const createSeguimientoSchema=Joi.object({
    date:date.required(),
});


const addItemSchema=Joi.object({
  seguimientoId:seguimientoId.required(),
  contratoId:contratoId.required()
});

const querySeguimientoSchema=Joi.object({
  date_min,
  date_max:date_max.when('date_min',
  {
    is:Joi.date().required(),
    then:Joi.required()
  })
});

module.exports={getSeguimientoSchema,createSeguimientoSchema,addItemSchema, querySeguimientoSchema};


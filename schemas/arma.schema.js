const Joi = require('joi');
const id = Joi.number().integer();
const tipoArma = Joi.string();
const marcaArma = Joi.string();
const modelo = Joi.string();
const calibre = Joi.string();
const serialArma = Joi.string();
const industria = Joi.string();
const nroCargador = Joi.string();
const capacidadCargador = Joi.string();
const capacidadTambor = Joi.string();
const estado = Joi.string();
const descripcion = Joi.string();
const estadoExistencia = Joi.string();
const fechaEntrega = Joi.date();
const fechaRecepcion = Joi.date();
const nroActaEntrega= Joi.string();
const fechaRegActual = Joi.date();
const mesRegistro= Joi.date();
const procedencia= Joi.string();
const tipoAdquisicion= Joi.string();
const userId = Joi.number().integer();

const createArmaSchema = Joi.object({
  tipoArma,
  modelo,
  marcaArma,
  calibre,
  serialArma,
  industria,
  nroCargador,
  capacidadCargador,
  capacidadTambor,
  estado,
  descripcion,
  estadoExistencia,
  fechaEntrega,
  fechaRecepcion,
  nroActaEntrega,
  fechaRegActual,
  mesRegistro,
  procedencia,
  tipoAdquisicion,
  userId,

});

const updateArmaSchema = Joi.object({
  tipoArma,
  modelo,
  marcaArma,
  calibre,
  serialArma,
  industria,
  nroCargador,
  capacidadCargador,
  capacidadTambor,
  estado,
  descripcion,
  estadoExistencia,
  fechaEntrega,
  fechaRecepcion,
  nroActaEntrega,
  fechaRegActual,
  mesRegistro,
  procedencia,
  tipoAdquisicion,
});

const getArmaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createArmaSchema, updateArmaSchema, getArmaSchema }

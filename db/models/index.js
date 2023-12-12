const { User, UserSchema } = require('./user.model');
const {Institution, InstitutionSchema} = require('./institution.model');
const {Contrato, ContratoSchema} = require('./contrato.model');
const {StateContrato, StateContratoSchema} = require('./state-contrato.model');
const {File,FileSchema}=require('./file.model');
const {Seguimiento,SeguimientoSchema}=require('./seguimiento.model');
const {ContratoSeguimiento,ContratoSeguimientoSchema}=require('./contrato-seguimiento.model');

const {Formulario, FormularioSchema} = require('./formulario.model');
const {DetalleFormulario, DetalleFormularioSchema} = require('./detalle-formulario.model');
const {ActivoFijo, ActivoFijoSchema} = require('./activo-fijo.model');
const {FormularioPerdida,FormularioPerdidaSchema}=require('./formulario-perdida.model');
const {DetallePerdida,DetallePerdidaSchema}=require('./detalle-perdida.model');
const {Arma,ArmaSchema}=require('./arma.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Institution.init(InstitutionSchema, Institution.config(sequelize));
  Contrato.init(ContratoSchema, Contrato.config(sequelize));
  StateContrato.init(StateContratoSchema, StateContrato.config(sequelize));
  File.init(FileSchema,File.config(sequelize));
  Seguimiento.init(SeguimientoSchema,Seguimiento.config(sequelize));
  ContratoSeguimiento.init(ContratoSeguimientoSchema,ContratoSeguimiento.config(sequelize));

  Formulario.init(FormularioSchema, Formulario.config(sequelize));
  DetalleFormulario.init(DetalleFormularioSchema, DetalleFormulario.config(sequelize));
  ActivoFijo.init(ActivoFijoSchema, ActivoFijo.config(sequelize));
  FormularioPerdida.init(FormularioPerdidaSchema,FormularioPerdida.config(sequelize));
  DetallePerdida.init(DetallePerdidaSchema,DetallePerdida.config(sequelize));
  Arma.init(ArmaSchema,Arma.config(sequelize));

  User.associate(sequelize.models);
  Institution.associate(sequelize.models);
  Contrato.associate(sequelize.models);
  StateContrato.associate(sequelize.models);
  File.associate(sequelize.models);
  Seguimiento.associate(sequelize.models);

  Formulario.associate(sequelize.models);
  DetalleFormulario.associate(sequelize.models);
  ActivoFijo.associate(sequelize.models);
  FormularioPerdida.associate(sequelize.models);
  DetalleFormulario.associate(sequelize.models);
  Arma.associate(sequelize.models);

}

module.exports = setupModels;

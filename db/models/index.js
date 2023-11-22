const { User, UserSchema } = require('./user.model');
const {Institution, InstitutionSchema} = require('./institution.model');
const {Contrato, ContratoSchema} = require('./contrato.model');
const {StateContrato, StateContratoSchema} = require('./state-contrato.model');
const {File,FileSchema}=require('./file.model');
const {Seguimiento,SeguimientoSchema}=require('./seguimiento.model');
const {ContratoSeguimiento,ContratoSeguimientoSchema}=require('./contrato-seguimiento.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Institution.init(InstitutionSchema, Institution.config(sequelize));
  Contrato.init(ContratoSchema, Contrato.config(sequelize));
  StateContrato.init(StateContratoSchema, StateContrato.config(sequelize));
  File.init(FileSchema,File.config(sequelize));
  Seguimiento.init(SeguimientoSchema,Seguimiento.config(sequelize));
  ContratoSeguimiento.init(ContratoSeguimientoSchema,ContratoSeguimiento.config(sequelize));

  User.associate(sequelize.models);
  Institution.associate(sequelize.models);
  Contrato.associate(sequelize.models);
  StateContrato.associate(sequelize.models);
  File.associate(sequelize.models);
  Seguimiento.associate(sequelize.models);
}

module.exports = setupModels;

const { User, UserSchema } = require('./user.model');
const {Institution, InstitutionSchema} = require('./institution.model');
const {Contrato, ContratoSchema} = require('./contrato.model');
const {StateContrato, StateContratoSchema} = require('./state-contrato.model');
const {File,FileSchema}=require('./file.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Institution.init(InstitutionSchema, Institution.config(sequelize));
  Contrato.init(ContratoSchema, Contrato.config(sequelize));
  StateContrato.init(StateContratoSchema, StateContrato.config(sequelize));
  File.init(FileSchema,File.config(sequelize));

  User.associate(sequelize.models);
  Institution.associate(sequelize.models);
  Contrato.associate(sequelize.models);
  StateContrato.associate(sequelize.models);
  File.associate(sequelize.models);
}

module.exports = setupModels;

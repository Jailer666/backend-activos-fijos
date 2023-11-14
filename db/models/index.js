const { User, UserSchema } = require('./user.model');
const {Institution, InstitutionSchema} = require('./institution.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Institution.init(InstitutionSchema, Institution.config(sequelize));

  User.associate(sequelize.models);
  Institution.associate(sequelize.models);

}

module.exports = setupModels;

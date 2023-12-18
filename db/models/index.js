const { User, UserSchema } = require('./user.model');


const { Formulario, FormularioSchema } = require('./formulario.model');
const { ActivoFijo, ActivoFijoSchema } = require('./activo-fijo.model');
const { DetalleActivoFijo, DetalleActivoFijoSchema } = require('./detalle-activo-fijo.model');
const { FormularioPerdida, FormularioPerdidaSchema } = require('./formulario-perdida.model');
const { DetallePerdida, DetallePerdidaSchema } = require('./detalle-perdida.model');
const { Arma, ArmaSchema } = require('./arma.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));


  Formulario.init(FormularioSchema, Formulario.config(sequelize));
  ActivoFijo.init(ActivoFijoSchema, ActivoFijo.config(sequelize));
  DetalleActivoFijo.init(DetalleActivoFijoSchema, DetalleActivoFijo.config(sequelize));
  FormularioPerdida.init(FormularioPerdidaSchema, FormularioPerdida.config(sequelize));
  DetallePerdida.init(DetallePerdidaSchema, DetallePerdida.config(sequelize));
  Arma.init(ArmaSchema, Arma.config(sequelize));


  User.associate(sequelize.models);
  Formulario.associate(sequelize.models);
  ActivoFijo.associate(sequelize.models);
  DetalleActivoFijo.associate(sequelize.models);
  FormularioPerdida.associate(sequelize.models);
  DetallePerdida.associate(sequelize.models);
  Arma.associate(sequelize.models);

}

module.exports = setupModels;

const { User, UserSchema } = require('./user.model');


const {Formulario, FormularioSchema} = require('./formulario.model');
const {DetalleFormulario, DetalleFormularioSchema} = require('./detalle-formulario.model');
const {ActivoFijo, ActivoFijoSchema} = require('./activo-fijo.model');
const {FormularioPerdida,FormularioPerdidaSchema}=require('./formulario-perdida.model');
const {DetallePerdida,DetallePerdidaSchema}=require('./detalle-perdida.model');
const {Arma,ArmaSchema}=require('./arma.model');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));


  Formulario.init(FormularioSchema, Formulario.config(sequelize));
  DetalleFormulario.init(DetalleFormularioSchema, DetalleFormulario.config(sequelize));
  ActivoFijo.init(ActivoFijoSchema, ActivoFijo.config(sequelize));
  FormularioPerdida.init(FormularioPerdidaSchema,FormularioPerdida.config(sequelize));
  DetallePerdida.init(DetallePerdidaSchema,DetallePerdida.config(sequelize));
  Arma.init(ArmaSchema,Arma.config(sequelize));



  Formulario.associate(sequelize.models);
  DetalleFormulario.associate(sequelize.models);
  ActivoFijo.associate(sequelize.models);
  FormularioPerdida.associate(sequelize.models);
  DetalleFormulario.associate(sequelize.models);
  Arma.associate(sequelize.models);

}

module.exports = setupModels;

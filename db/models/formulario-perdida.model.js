const { Model, DataTypes, Sequelize } = require('sequelize');
const {ARMA_TABLE}=require('./arma.model');

const FORMULARIO_PERDIDA_TABLE = 'formularios_perdida';

const FormularioPerdidaSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  codigo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique:true
  },
  departamento: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  provincia: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  responsables: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  condicion:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  estadoArma:{
    allowNull: false,
    type: DataTypes.STRING,
    field:'estado_arma'
  },
  responsable:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  ciResponsable:{
    allowNull: true,
    type: DataTypes.STRING,
    field:'ci_responsable'
  },
  nroInformeResponsable:{
    allowNull: true,
    type: DataTypes.STRING,
    field:'nro_informe_responsable'
  },
  situacion:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  nroCasoInvestigacion:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  fecha: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  observaciones:{
    allowNull: true,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  armaId: {
    field: 'arma_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ARMA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class FormularioPerdida extends Model {
  static associate(models) {
    this.belongsTo(models.Arma, { as: 'arma' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FORMULARIO_PERDIDA_TABLE,
      modelName: 'FormularioPerdida',
      timestamps: false,
    };
  }
}

module.exports = { FormularioPerdida, FormularioPerdidaSchema, FORMULARIO_PERDIDA_TABLE };

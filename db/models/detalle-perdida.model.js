const { Model, DataTypes, Sequelize } = require('sequelize');
const {FORMULARIO_PERDIDA_TABLE}=require('./formulario-perdida.model');

const DETALLE_PERDIDA_TABLE = 'detalles_perdidas';

const DetallePerdidaSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
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
  formularioPerdidaId: {
    field: 'formulario_perdida_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FORMULARIO_PERDIDA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class DetallePerdida extends Model {
  static associate(models) {
    this.hasMany(models.Arma, { as: 'armas', foreignKey: 'detallePerdidaId' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DETALLE_PERDIDA_TABLE,
      modelName: 'DetallePerdida',
      timestamps: false,
    };
  }
}

module.exports = { DetallePerdida, DetallePerdidaSchema, DETALLE_PERDIDA_TABLE };

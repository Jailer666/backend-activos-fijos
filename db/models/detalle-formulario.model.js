const { Model, DataTypes, Sequelize } = require('sequelize');
const {FORMULARIO_TABLE}=require('./formulario.model');

const DETALLE_FORMULARIO_TABLE = 'detalles_formulario';

const DetalleFormularioSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  codFormulario: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'cod_formulario',
    unique:true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  formularioId: {
    field: 'formulario_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FORMULARIO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class DetalleFormulario extends Model {
  static associate(models) {
    this.hasMany(models.ActivoFijo, { as: 'activosFijos', foreignKey: 'detalleFormularioId' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DETALLE_FORMULARIO_TABLE,
      modelName: 'DetalleFormulario',
      timestamps: false,
    };
  }
}

module.exports = { DetalleFormulario, DetalleFormularioSchema, DETALLE_FORMULARIO_TABLE };

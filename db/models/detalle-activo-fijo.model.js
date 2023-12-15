const { Model, DataTypes, Sequelize } = require('sequelize');
const DETALLE_ACTIVO_FIJO_TABLE = 'activos_fijos';

const DetalleActivoFijoSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  version: {
    allowNull: false, //nulo
    type: DataTypes.STRING, //tipo entero
  },
    createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
};

class DetalleActivoFijo extends Model {
  static associate(models) {
    this.hasMany(models.Formulario,{
      as:'formularios',
      foreignKey:'detalleActivoFijoId'
     });
     this.hasMany(models.ActivoFijo,{
      as:'activoFijos',
      foreignKey:'detalleActivoFijoId'
     });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DETALLE_ACTIVO_FIJO_TABLE,
      modelName: 'DetalleActivoFijo',
      timestamps: false,
    };
  }
}

module.exports = { DetalleActivoFijo, DetalleActivoFijoSchema, DETALLE_ACTIVO_FIJO_TABLE };

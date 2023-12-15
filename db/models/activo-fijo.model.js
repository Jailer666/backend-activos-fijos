const { Model, DataTypes, Sequelize } = require('sequelize');
const {DETALLE_ACTIVO_FIJO_TABLE}=require('./detalle-activo-fijo.model');
const ACTIVO_FIJO_TABLE = 'activos_fijos';

const ActivoFijoSchema = {
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
  fechaAlta: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_alta',
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  observaciones: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  responsable: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ubicacion: {
    allowNull:true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  detalleActivoFijoId: {
    field: 'detalle_activo_fijo_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DETALLE_ACTIVO_FIJO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class ActivoFijo extends Model {
  static associate(models) {
    this.belongsTo(models.DetalleActivoFijo, { as: 'detalleActivoFijo' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIVO_FIJO_TABLE,
      modelName: 'ActivoFijo',
      timestamps: false,
    };
  }
}

module.exports = { ActivoFijo, ActivoFijoSchema, ACTIVO_FIJO_TABLE };

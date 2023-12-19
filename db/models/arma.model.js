const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model.model');
const ARMA_TABLE = 'armas';

const ArmaSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  tipoArma: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'tipo_arma',
  },
  marcaArma: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'marca_arma',
  },
  modelo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  calibre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  serialArma: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'serial_arma'
  },
  industria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nroCargador: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'nro_cargador'
  },
  capacidadCargador: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'capacidad_cargador'
  },
  capacidadTambor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'capacidad_tambor'
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  estadoExistencia: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'estado_existencia'
  },
  fechaEntrega: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_entrega'
  },
  fechaRecepcion: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_recepcion'
  },
  nroActaEntrega: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'nro_acta_entrega'
  },
  fechaRegActual: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'fecha_reg_actual'
  },
  mesRegistro: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'mes_registro'
  },
  procedencia: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  tipoAdquisicion: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'tipo_adquisicion'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
};

class Arma extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.FormularioPerdida,{
      as:'formulariosPerdida',
      foreignKey:'armaId'
     })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ARMA_TABLE,
      modelName: 'Arma',
      timestamps: false,
    };
  }
}

module.exports = { Arma, ArmaSchema, ARMA_TABLE };

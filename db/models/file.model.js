const { Model, DataTypes, Sequelize } = require('sequelize');

const { CONTRATO_TABLE } = require('./contrato.model');
const FILE_TABLE = 'files';

const FileSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER,//tipo entero
  },
  type: {
    allowNull: false,
    type: DataTypes.STRING
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  contratoId: {
    field: 'contrato_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CONTRATO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class File extends Model {
  static associate(models) {
    this.belongsTo(models.Contrato, { as: 'contrato' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FILE_TABLE,
      modelName: 'File',
      timestamps: false
    }
  }
}

module.exports = { File, FileSchema, FILE_TABLE }

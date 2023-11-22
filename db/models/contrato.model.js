const { Model, DataTypes, Sequelize } = require('sequelize');

const { INSTITUTION_TABLE } = require('./institution.model');
const { STATE_CONTRATO_TABLE } = require('./state-contrato.model');
const CONTRATO_TABLE = 'contratos';

const ContratoSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER,//tipo entero
    unique: true //valor unico
  },
  number: {
    allowNull: false,
    type: DataTypes.STRING
  },
  startDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field:'start_date'
  },
  finishDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field:'finish_date'
  },
  cantPolice: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'cant_police'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  institutionId: {
    field: 'institution_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INSTITUTION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  stateContratoId: {
    field: 'state_contrato_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STATE_CONTRATO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Contrato extends Model {
  static associate(models) {
    this.belongsTo(models.Institution, { as: 'institution' });
    this.belongsTo(models.StateContrato, { as: 'state_contrato' });
    this.hasMany(models.File,{as:'files',foreignKey:'contratoId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRATO_TABLE,
      modelName: 'Contrato',
      timestamps: false
    }
  }
}

module.exports = { Contrato, ContratoSchema, CONTRATO_TABLE }

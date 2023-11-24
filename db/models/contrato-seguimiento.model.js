const { Model, DataTypes, Sequelize } = require('sequelize');


const CONTRATO_SEGUIMIENTO_TABLE = 'contratos_seguimientos';

const {CONTRATO_TABLE}=require('./contrato.model');
const {SEGUIMIENTO_TABLE}=require('./seguimiento.model');

const ContratoSeguimientoSchema={
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER//tipo entero
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
  },
  seguimientoId: {
    field: 'seguimiento_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SEGUIMIENTO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class ContratoSeguimiento extends Model{
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CONTRATO_SEGUIMIENTO_TABLE,
      modelName: 'ContratoSeguimiento',
      timestamps: false
    }
  }
}

module.exports={ContratoSeguimiento,ContratoSeguimientoSchema,CONTRATO_SEGUIMIENTO_TABLE}

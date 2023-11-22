const { Model, DataTypes, Sequelize } = require('sequelize');


const STATE_CONTRATO_TABLE = 'state_contratos';

const StateContratoSchema={
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER//tipo entero
  },
  name:{
    allowNull:false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
}

class StateContrato extends Model{
  static associate(models){
    this.hasMany(models.Contrato,{
      as:'contratos',
      foreignKey:'stateContratoId'
     });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: STATE_CONTRATO_TABLE,
      modelName: 'StateContrato',
      timestamps: false
    }
  }
}

module.exports={StateContrato,StateContratoSchema,STATE_CONTRATO_TABLE}

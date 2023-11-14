const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');
const INSTITUTION_TABLE = 'institutions';

const InstitutionSchema={
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
  nit: {
    allowNull: false,
    type: DataTypes.STRING,//tipo cadena de texto
    unique: true //valor unico
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gerente:{
    allowNull:false,
    type:DataTypes.STRING
  },
  gerenteCi:{
    field:'gerente_ci',
    allowNull:false,
    type:DataTypes.STRING
  },
  subgerente:{
    allowNull:true,
    type:DataTypes.STRING
  },
  subgerenteCi:{
    field:'subgerente_ci',
    allowNull:true,
    type:DataTypes.STRING
  },
  description:{
    allowNull:true,
    type:DataTypes.TEXT
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING,//tipo cadena de texto
    unique: true, //valor unico
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId:{
    field:'user_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:USER_TABLE,
      key:'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  }
}

class Institution extends Model{
  static associate(models){
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.Contrato,{
      as:'contratos',
      foreignKey:'institutionId'
     });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: INSTITUTION_TABLE,
      modelName: 'Institution',
      timestamps: false
    }
  }
}

module.exports={Institution,InstitutionSchema,INSTITUTION_TABLE}

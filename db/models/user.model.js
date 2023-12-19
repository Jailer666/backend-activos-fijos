const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER//tipo entero
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,//tipo cadena de texto
    unique: true, //valor unico
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,//tipo cadena de texto
    unique: true, //valor unico
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  role:{
    allowNull:false,
    type:DataTypes.STRING,
    defaultValue:'admin'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE, //tipo fecha
    field: 'create_at',
    defaultValue: Sequelize.NOW//el momento en que se registro
  }
}

class User extends Model {
  static associate(models) {
   this.hasMany(models.Arma,{
    as:'armas',
    foreignKey:'userId'
   })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false //creacion por defecto deshabilitada
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }

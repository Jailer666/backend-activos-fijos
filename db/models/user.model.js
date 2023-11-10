const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true,//autoincrementable
    primaryKey: true,//clave primaria
    type: DataTypes.INTEGER//tipo entero
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE, //tipo fecha
    field: 'create_at',
    defaultValue: Sequelize.NOW//el momento en que se registro
  }
}

class User extends Model {
  static associate() {
    // associate
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

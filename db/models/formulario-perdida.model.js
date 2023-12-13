const { Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE}=require('./user.model');

const FORMULARIO_PERDIDA_TABLE = 'formularios_perdida';

const FormularioPerdidaSchema = {
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
  departamento: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  provincia: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  responsables: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  usuarioId: {
    field: 'usuario_id',
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

class FormularioPerdida extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.DetallePerdida, { as: 'detallesPerdidas', foreignKey: 'formularioPerdidaId' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FORMULARIO_PERDIDA_TABLE,
      modelName: 'FormularioPerdida',
      timestamps: false,
    };
  }
}

module.exports = { FormularioPerdida, FormularioPerdidaSchema, FORMULARIO_PERDIDA_TABLE };

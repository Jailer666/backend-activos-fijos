const { Model, DataTypes, Sequelize } = require('sequelize');
const {USER_TABLE}=require('./user.model');
const {DETALLE_ACTIVO_FIJO_TABLE}=require('./detalle-activo-fijo.model');


const FORMULARIO_TABLE = 'formularios';

const FormularioSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  unidadPrincipal: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'unidad_principal',


  },
  unidad: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  departamento: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  lugar: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  responsableSaliente: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'responsable_saliente',
  },
  responsableEntrante: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'responsable_entrante',
  },
  cargoSaliente: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'cargo_saliente',
  },
  cargoEntrante: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'cargo_entrante',
  },
  oficinaSaliente: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'oficina_saliente',
  },
  oficinaEntrante: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'oficina_entrante',
  },
  fecha: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  observaciones: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  tipo: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  codFormulario: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'cod_formulario',
    unique: true,
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

class Formulario extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.belongsTo(models.DetalleActivoFijo, { as: 'detalleActivoFijo' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: FORMULARIO_TABLE,
      modelName: 'Formulario',
      timestamps: false,
    };
  }
}

module.exports = { Formulario, FormularioSchema, FORMULARIO_TABLE };

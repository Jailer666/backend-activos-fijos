const { Model, DataTypes, Sequelize } = require('sequelize');

const CONTRATO_TABLE = 'activos_fijos';

const ContratoSchema = {
  id: {
    allowNull: false, //nulo
    autoIncrement: true, //autoincrementable
    primaryKey: true, //clave primaria
    type: DataTypes.INTEGER, //tipo entero
  },
  codigo: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  fechaAlta: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_alta',
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  estado: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  observaciones: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  responsable: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ubicacion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  inventarioMueblesId: {
    field: 'inventario_muebles_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INSTITUTION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  stateContratoId: {
    field: 'state_contrato_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STATE_CONTRATO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Contrato extends Model {
  static associate(models) {
    this.belongsTo(models.Institution, { as: 'institution' });
    this.belongsTo(models.StateContrato, { as: 'stateContrato' });
    this.hasMany(models.File, { as: 'files', foreignKey: 'contratoId' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRATO_TABLE,
      modelName: 'Contrato',
      timestamps: false,
    };
  }
}

module.exports = { Contrato, ContratoSchema, CONTRATO_TABLE };

'use strict';
const { DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./../models/user.model');
const { FORMULARIO_TABLE } = require('./../models/formulario.model');
const {
  DETALLE_ACTIVO_FIJO_TABLE,
} = require('../models/detalle-activo-fijo.model');
const { ACTIVO_FIJO_TABLE } = require('../models/activo-fijo.model');
const {
  FORMULARIO_PERDIDA_TABLE,
} = require('../models/formulario-perdida.model');
const { ARMA_TABLE } = require('../models/arma.model');
/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true, //autoincrementable
        primaryKey: true, //clave primaria
        type: DataTypes.INTEGER, //tipo entero
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING, //tipo cadena de texto
        unique: true, //valor unico
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING, //tipo cadena de texto
        unique: true, //valor unico
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      recoveryToken: {
        field: 'recovery_token',
        allowNull: true,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'admin',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, //tipo fecha
        field: 'create_at',
        defaultValue: Sequelize.NOW, //el momento en que se registro
      },
    });
    await queryInterface.createTable(DETALLE_ACTIVO_FIJO_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true, //autoincrementable
        primaryKey: true, //clave primaria
        type: DataTypes.INTEGER, //tipo entero
      },
      version: {
        allowNull: false, //nulo
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(ACTIVO_FIJO_TABLE, {
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
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
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
      },
    });
    await queryInterface.createTable(FORMULARIO_TABLE, {
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
      },
    });

    await queryInterface.createTable(ARMA_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true, //autoincrementable
        primaryKey: true, //clave primaria
        type: DataTypes.INTEGER, //tipo entero
      },
      tipoArma: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'tipo_arma',
      },
      marcaArma: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'marca_arma',
      },
      modelo: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      calibre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      serialArma: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'serial_arma',
      },
      industria: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nroCargador: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nro_cargador',
      },
      capacidadCargador: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'capacidad_cargador',
      },
      capacidadTambor: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'capacidad_tambor',
      },
      estado: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descripcion: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      estadoExistencia: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado_existencia',
      },
      fechaEntrega: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_entrega',
      },
      fechaRecepcion: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_recepcion',
      },
      nroActaEntrega: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nro_acta_entrega',
      },
      fechaRegActual: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'fecha_reg_actual',
      },
      mesRegistro: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'mes_registro',
      },
      procedencia: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      tipoAdquisicion: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'tipo_adquisicion',
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
    });
    await queryInterface.createTable(FORMULARIO_PERDIDA_TABLE, {
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
      condicion: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      estadoArma: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'estado_arma',
      },
      responsable: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      ciResponsable: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'ci_responsable',
      },
      nroInformeResponsable: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'nro_informe_responsable',
      },
      situacion: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      nroCasoInvestigacion: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      fecha: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      observaciones: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      armaId: {
        field: 'arma_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ARMA_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACTIVO_FIJO_TABLE);
    await queryInterface.dropTable(FORMULARIO_TABLE);
    await queryInterface.dropTable(DETALLE_ACTIVO_FIJO_TABLE);
    await queryInterface.dropTable(FORMULARIO_PERDIDA_TABLE);
    await queryInterface.dropTable(ARMA_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};

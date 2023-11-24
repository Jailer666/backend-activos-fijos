'use strict';
const { DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./../models/user.model');
const { INSTITUTION_TABLE } = require('./../models/institution.model');
const { STATE_CONTRATO_TABLE } = require('../models/state-contrato.model');
const { CONTRATO_TABLE } = require('../models/contrato.model');
const { FILE_TABLE } = require('../models/file.model');
const { SEGUIMIENTO_TABLE } = require('../models/seguimiento.model');
const { CONTRATO_SEGUIMIENTO_TABLE } = require('../models/contrato-seguimiento.model');
/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, {
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
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'admin'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE, //tipo fecha
        field: 'create_at',
        defaultValue: Sequelize.NOW//el momento en que se registro
      }
    });
    await queryInterface.createTable(INSTITUTION_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true,//autoincrementable
        primaryKey: true,//clave primaria
        type: DataTypes.INTEGER//tipo entero
      },
      name: {
        allowNull: false,
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
      gerente: {
        allowNull: false,
        type: DataTypes.STRING
      },
      gerenteCi: {
        field: 'gerente_ci',
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      subgerente: {
        allowNull: true,
        type: DataTypes.STRING
      },
      subgerenteCi: {
        field: 'subgerente_ci',
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      email: {
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
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
    await queryInterface.createTable(STATE_CONTRATO_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true,//autoincrementable
        primaryKey: true,//clave primaria
        type: DataTypes.INTEGER//tipo entero
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      }
    });
    await queryInterface.createTable(CONTRATO_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true,//autoincrementable
        primaryKey: true,//clave primaria
        type: DataTypes.INTEGER,//tipo entero
      },
      number: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      startDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'start_date'
      },
      finishDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'finish_date'
      },
      cantPolice: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'cant_police'
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
    });
    await queryInterface.createTable(FILE_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true,//autoincrementable
        primaryKey: true,//clave primaria
        type: DataTypes.INTEGER,//tipo entero
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING
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
      }
    });
    await queryInterface.createTable(SEGUIMIENTO_TABLE, {
      id: {
        allowNull: false, //nulo
        autoIncrement: true,//autoincrementable
        primaryKey: true,//clave primaria
        type: DataTypes.INTEGER//tipo entero
      },
      date:{
        allowNull:false,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      }
    });
    await queryInterface.createTable(CONTRATO_SEGUIMIENTO_TABLE, {
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
    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable(CONTRATO_SEGUIMIENTO_TABLE);
    await queryInterface.dropTable(SEGUIMIENTO_TABLE);
    await queryInterface.dropTable(FILE_TABLE);
    await queryInterface.dropTable(CONTRATO_TABLE);
    await queryInterface.dropTable(STATE_CONTRATO_TABLE);
    await queryInterface.dropTable(INSTITUTION_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};

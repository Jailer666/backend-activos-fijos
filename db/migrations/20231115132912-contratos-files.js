'use strict';
const {StateContratoSchema,STATE_CONTRATO_TABLE}=require('../models/state-contrato.model');
const {ContratoSchema,CONTRATO_TABLE}=require('../models/contrato.model');
const {FileSchema,FILE_TABLE}=require('../models/file.model');
/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(STATE_CONTRATO_TABLE, StateContratoSchema);
    await queryInterface.createTable(CONTRATO_TABLE, ContratoSchema);
    await queryInterface.createTable(FILE_TABLE, FileSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(FILE_TABLE);
    await queryInterface.dropTable(CONTRATO_TABLE);
    await queryInterface.dropTable(STATE_CONTRATO_TABLE);
  }
};

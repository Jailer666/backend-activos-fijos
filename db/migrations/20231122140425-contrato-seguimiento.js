'use strict';
const {SeguimientoSchema,SEGUIMIENTO_TABLE}=require('../models/seguimiento.model');
const {ContratoSeguimientoSchema,CONTRATO_SEGUIMIENTO_TABLE}=require('../models/contrato-seguimiento.model');
/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(SEGUIMIENTO_TABLE, SeguimientoSchema);
    await queryInterface.createTable(CONTRATO_SEGUIMIENTO_TABLE, ContratoSeguimientoSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CONTRATO_SEGUIMIENTO_TABLE);
    await queryInterface.dropTable(SEGUIMIENTO_TABLE);
  }
};

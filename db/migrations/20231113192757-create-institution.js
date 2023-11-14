'use strict';

const {InstitutionSchema,INSTITUTION_TABLE}=require('./../models/institution.model');

/**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(INSTITUTION_TABLE, InstitutionSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(INSTITUTION_TABLE);
  }
};

// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize');

class StateContratoService {

  constructor(){

  }

  async create(data) {
    const newStateContrato = await models.StateContrato.create(data);
    return newStateContrato;
  }

  async find() {

    const rta = await models.StateContrato.findAll();
    return rta;
  }
  async findOne(id) {
    const stateContrato = await models.StateContrato.findByPk(id,{
      include:['contratos']
    });

    return stateContrato;
  }

  async update(id, changes) {
    const stateContrato = await this.findOne(id);
    const rta = await stateContrato.update(changes);
    return rta;
  }

  async delete(id) {
    const stateContrato = await this.findOne(id);
    await stateContrato.destroy();
    return { id };
  }
}

module.exports = StateContratoService;

// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SeguimientoService {

  constructor() {

  }

  async create(data) {
    const newSeguimiento = await models.Seguimiento.create(data);
    return newSeguimiento;
  }
  async addItem(data) {
    const newItem = await models.ContratoSeguimiento.create(data);
    return newItem;
  }
  async find() {

    const rta = await models.Seguimiento.findAll();
    return rta;
  }
  async findOne(id) {
    const seguimiento = await models.Seguimiento.findByPk(id, {
      include: ['items']
    });

    return seguimiento;
  }

  async update(id, changes) {
    const seguimiento = await this.findOne(id);
    const rta = await seguimiento.update(changes);
    return rta;
  }

  async delete(id) {
    const seguimiento = await this.findOne(id);
    await seguimiento.destroy();
    return { id };
  }
}

module.exports = SeguimientoService;

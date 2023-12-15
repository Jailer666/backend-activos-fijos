// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ActivoFijoService {
  constructor() {}

  async create(data) {
    const newActivoFijo = await models.ActivoFijo.create(data);
    return newActivoFijo;
  }

  async find() {
    const rta = await models.ActivoFijo.findAll({
      include: ['detalleActivoFijo'],
      order: [['id', 'ASC']],
    });
    return rta;
  }

  async findOne(id) {
    const activoFijo = await models.ActivoFijo.findByPk(id, {
      include: ['detalleActivoFijo'],
    });

    return activoFijo;
  }

  async update(id, changes) {
    const activoFijo = await this.findOne(id);
    const rta = await activoFijo.update(changes);
    return rta;
  }

  async delete(id) {
    const activoFijo = await this.findOne(id);
    await activoFijo.destroy();
    return { id };
  }
}

module.exports = ActivoFijoService;

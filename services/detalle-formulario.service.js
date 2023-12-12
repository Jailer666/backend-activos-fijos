// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../libs/sequelize');

class DetalleFormularioService {

  constructor() {

  }

  async create(data) {
    const newDetalleFormulario = await models.DetalleFormulario.create(data);
    return newDetalleFormulario;
  }

  async find(query) {
    const options = {
      include: ['activosFijos'],
      where: {}
    }
    const { date_min, date_max } = query;
    if (date_min && date_max) {
      options.where.date = {
        [Op.gte]: date_min,
        [Op.lte]: date_max
      }
    }
    const rta = await models.DetalleFormulario.findAll(options);
    return rta;
  }
  async findOne(id) {
    const detalleFormulario = await models.DetalleFormulario.findByPk(id, {
      include: ['activosFijos']
    });

    return detalleFormulario;
  }

  async update(id, changes) {
    const detalleFormulario = await this.findOne(id);
    const rta = await detalleFormulario.update(changes);
    return rta;
  }

  async delete(id) {
    const detalleFormulario = await this.findOne(id);
    await detalleFormulario.destroy();
    return { id };
  }
}

module.exports = DetalleFormularioService;

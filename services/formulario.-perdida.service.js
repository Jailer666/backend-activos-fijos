// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { models } = require('../libs/sequelize');

class FormularioPerdidaService {

  constructor() {

  }

  async create(data) {
    const newFormularioPerdida = await models.FormularioPerdida.create(data);
    return newFormularioPerdida;
  }

  async find(query) {
    const options = {
      include: ['arma'],
      where: {}
    }
    const { date_min, date_max } = query;
    if (date_min && date_max) {
      options.where.date = {
        [Op.gte]: date_min,
        [Op.lte]: date_max
      }
    }
    const rta = await models.FormularioPerdida.findAll(options);
    return rta;
  }
  async findOne(id) {
    const FormularioPerdida = await models.FormularioPerdida.findByPk(id, {
      include: ['arma']
    });

    return FormularioPerdida;
  }

  async update(id, changes) {
    const FormularioPerdida = await this.findOne(id);
    const rta = await FormularioPerdida.update(changes);
    return rta;
  }

  async delete(id) {
    const FormularioPerdida = await this.findOne(id);
    await FormularioPerdida.destroy();
    return { id };
  }
}

module.exports = FormularioPerdidaService;

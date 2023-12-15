// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize');

class DetalleActivoFijoService {

  constructor(){

  }

  async create(data) {
    const newDetalleActivoFijo = await models.DetalleActivoFijo.create(data);
    return newDetalleActivoFijo;
  }

  async find() {
    const rta = await models.ActivoFijo.findAll({
      include:['formularios','activosFijos']
    });
    return rta;
  }

  async findOne(id) {
    const detalleActivoFijo = await models.DetalleActivoFijo.findByPk(id,{
      include:['formularios','activosFijos']
    });

    return detalleActivoFijo;
  }

  async update(id, changes) {
    const detalleActivoFijo = await this.findOne(id);
    const rta = await detalleActivoFijo.update(changes);
    return rta;
  }

  async delete(id) {
    const detalleActivoFijo = await this.findOne(id);
    await detalleActivoFijo.destroy();
    return { id };
  }
}

module.exports = DetalleActivoFijoService;

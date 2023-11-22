// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize');

class FileService {

  constructor(){

  }

  async create(data) {
    const newFile = await models.File.create(data);
    return newFile;
  }

  async find() {

    const rta = await models.File.findAll();
    return rta;
  }
  async findOne(id) {
    const file = await models.File.findByPk(id,{
      include:['contrato']
    });

    return file;
  }

  async update(id, changes) {
    const file = await this.findOne(id);
    const rta = await file.update(changes);
    return rta;
  }

  async delete(id) {
    const file = await this.findOne(id);
    await file.destroy();
    return { id };
  }
}

module.exports = FileService;

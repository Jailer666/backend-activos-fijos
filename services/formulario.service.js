// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');

const {models}=require('../libs/sequelize');

class FormulariosService {

  constructor(){
    // this.institutions = [];
    // this.generate();
    // this.pool=pool;
    // this.pool.on('error',(err)=>console.log(err));
  }

  async create(data) {
    const newFormulario = await models.Formulario.create(data);
    return newFormulario;
  }

  async find() {
    // const query='SELECT *FROM usuarios';
    // const {data}=await sequelize.query(query);
    const options={
      include:['user','detalles'],where:{}

    }
    const rta = await models.Formulario.findAll(options);
    return rta;
  }
  async findByUser() {

  }
  async findOne(id) {
    const formulario = await models.Formulario.findByPk(id,{
      include:['user','detalles']
    });

    return formulario;
  }
  async update(id, changes) {
    const formulario = await this.findOne(id);
    const rta = await formulario.update(changes);
    return rta;
  }

  async delete(id) {
    const formulario = await this.findOne(id);
    await formulario.destroy();
    return { id };
  }
}

module.exports = FormulariosService;

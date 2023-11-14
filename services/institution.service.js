// const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize');

class InstitutionsService {

  constructor(){
    // this.institutions = [];
    // this.generate();
    // this.pool=pool;
    // this.pool.on('error',(err)=>console.log(err));
  }

  async create(data) {
    const newInstitution = await models.Institution.create(data);
    return newInstitution;
  }

  async find() {
    // const query='SELECT *FROM usuarios';
    // const {data}=await sequelize.query(query);
    const rta = await models.Institution.findAll();
    return rta;
  }
  async findOne(id) {
    const institution = await models.Institution.findByPk(id,{
      include:['user']
    });

    return institution;
  }

  async update(id, changes) {
    const institution = await this.findOne(id);
    const rta = await institution.update(changes);
    return rta;
  }

  async delete(id) {
    const institution = await this.findOne(id);
    await institution.destroy();
    return { id };
  }
}

module.exports = InstitutionsService;

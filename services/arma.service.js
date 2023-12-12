// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize');

class ArmaService {

  constructor(){
    // this.institutions = [];
    // this.generate();
    // this.pool=pool;
    // this.pool.on('error',(err)=>console.log(err));
  }

  async create(data) {
    const newArma = await models.Arma.create(data);
    return newArma;
  }

  async find() {
    // const query='SELECT *FROM usuarios';
    // const {data}=await sequelize.query(query);
    const rta = await models.Arma.findAll();
    return rta;
  }
  async findOne(id) {
    const arma = await models.Arma.findByPk(id,{
      include:['detallePerdida']
    });

    return arma;
  }

  async update(id, changes) {
    const arma = await this.findOne(id);
    const rta = await arma.update(changes);
    return rta;
  }

  async delete(id) {
    const arma = await this.findOne(id);
    await arma.destroy();
    return { id };
  }
}

module.exports = ArmaService;

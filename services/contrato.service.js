// const { faker } = require('@faker-js/faker');
// const boom = require('@hapi/boom');

const {models}=require('../libs/sequelize');

class ContratosService {

  constructor(){
    // this.institutions = [];
    // this.generate();
    // this.pool=pool;
    // this.pool.on('error',(err)=>console.log(err));
  }

  async create(data) {
    const newContrato = await models.Contrato.create(data);
    return newContrato;
  }

  async find(query) {
    // const query='SELECT *FROM usuarios';
    // const {data}=await sequelize.query(query);
    const options={
      include:['institution'],where:{}

    }
    const {limit,offset,stateContratoId}=query;
    if(limit && offset){
      options.limit=limit;
      options.offset=offset;
    }
    if(stateContratoId){
      options.where.stateContratoId=stateContratoId;
    }
    const rta = await models.Contrato.findAll(options);
    return rta;
  }
  async findByUser(userId) {
    const orders = await models.Contrato.findAll({
      where: { '$institution.user.id$': userId },
      include: [
        {
          association: 'institution',
          include: ['user']
        }
      ]
    });
    return orders;
  }
  async findOne(id) {
    const contrato = await models.Contrato.findByPk(id,{
      include:['isntitution']
    });

    return contrato;
  }
  async update(id, changes) {
    const contrato = await this.findOne(id);
    const rta = await contrato.update(changes);
    return rta;
  }

  async delete(id) {
    const contrato = await this.findOne(id);
    await contrato.destroy();
    return { id };
  }
}

module.exports = ContratosService;

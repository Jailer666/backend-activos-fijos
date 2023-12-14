// const boom = require('@hapi/boom');
// const getConnection=require('../libs/postgres');
// const pool=require('../libs/postgres.pool');
const bcrypt = require('bcrypt');
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {
    // this.pool=pool;
    // this.pool.on('error',(err)=>console.log(err));
  }
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({ ...data, password: hash });
    delete newUser.dataValues.password;
    return {
      newUser,
      data: "usuario registrado satisfactoriamente"
    };
  }

  async find(query) {
    const options = { include: ['formularios'] }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const rta = await models.User.findAll(options);
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }
  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['formularios']
    });
    return user;
  }
  async update(id, changes) {
    if (changes.password) {
      const hash = await bcrypt.hash(changes.password, 10);
      const user = await this.findOne(id);
      const rta = await user.update({ ...changes, password: hash });
      return rta;

    } else {
      const user = await this.findOne(id);
      const rta = await user.update(changes);
      return rta;
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {
      id:id,
      data: "usuario eliminado"
    };
  }
}

module.exports = UserService;

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
    return newUser;
  }

  async find(query) {
    const options = { include: ['institutions'] }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const rta = await models.User.findAll(options);
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['institutions']
    });

    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;

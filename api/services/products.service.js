const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

const registerName = 'Product';

class ProductsService {
  constructor() {
    //
  }

  async create(data) {
    const registers = await models.Products.findAll();
    if (registers.length > 4) {
      throw boom.badRequest('In this demo you can add up to 5 items');
    }
    const newRegister = await models.Products.create(data);
    return newRegister;
  }

  async find() {
    const registers = await models.Products.findAll({
      order: [['id', 'DESC']],
      attributes: ['id', 'name', 'costPrice', 'sellPrice']
    });
    return registers;
  }

  async findOne(id) {
    const register = await models.Products.findByPk(id);
    if (!register) {
      throw boom.notFound(`${registerName} not found`);
    }
    return register;
  }

  async update(id, changes) {
    const register = await this.findOne(id);
    const data = await register.update(changes);
    return data;
  }

  async delete(id) {
    const register = await this.findOne(id)
    await register.destroy();
    return { id };
  }
}

module.exports = ProductsService;

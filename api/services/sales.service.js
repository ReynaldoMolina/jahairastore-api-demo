const boom = require('@hapi/boom');
const { Sequelize } = require('sequelize');
const { models } = require('../libs/sequelize');

const registerName = 'Sale';

class SalesService {
  constructor() {
    //       
  }

  async create(data) {
    const registers = await models.Sales.findAll();
    if (registers.length > 5) {
      throw boom.badRequest('In this demo you can add up to 5 items');
    }
    const newRegister = await models.Sales.create(data);
    return newRegister;
  }

  async find() {
    const registers = await models.Sales.findAll({
      order: [['id', 'DESC']],
      attributes: {exclude: ['clientId', 'concepto']},
      include: {
        association: 'client',
        attributes: ['name', 'lastname']
      }
    });

    const processedRegisters = registers.map(register => {
      return {
        id: register.id,
        orderId: register.orderId,
        saleDate: register.saleDate,
        abono: register.abono,
        fullname: `${register.client.name} ${register.client.lastname}`
      }
    });

    return processedRegisters;
  }

  async findOne(id) {
    const register = await models.Sales.findByPk(id, {
      include: {
        association: 'client',
        attributes: ['name', 'lastname']
      }
    });
    if (!register) {
      throw boom.notFound(`${registerName} not found`);
    }

    const processedRegister = {
      id: register.id,
      clientId: register.clientId,
      orderId: register.orderId,
      saleDate: register.saleDate,
      abono: register.abono,
      saldo: register.saldo,
      concepto: register.concepto,
      fullname: `${register.client.name} ${register.client.lastname}`
    }

    return processedRegister;
  }

  async update(id, changes) {
    const register = await models.Sales.findByPk(id);
    const data = await register.update(changes);
    return data;
  }

  async delete(id) {
    const register = await models.Sales.findByPk(id);
    await register.destroy();
    return { id };
  }
}

module.exports = SalesService;

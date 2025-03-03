const boom = require('@hapi/boom');
const { Sequelize, col } = require('sequelize');
const { models } = require('../libs/sequelize');

const registerName = 'Order';

class OrdersService {
  constructor() {
    //
  }

  async create(data) {
    const registers = await models.Orders.findAll();
    if (registers.length > 5) {
      throw boom.badRequest('In this demo you can add up to 5 items');
    }
    const newRegister = await models.Orders.create(data);
    return newRegister;
  }

  async find() {
    const registers = await models.Orders.findAll({
      order: [['id', 'DESC']],
      attributes: ['id', 'orderDate'],
      include: [
        {
          association: 'client',
          attributes: ['name', 'lastname']
        },
        {
          association: 'orderdetail',
          attributes: ['sellPrice', 'costPrice', 'quantity']
        },
        {
          association: 'sales',
          attributes: ['abono']
        }
      ]
    });

    const processedRegisters = registers.map(register => {
      const fullname = `${register.client.name} ${register.client.lastname}`;
      const totalSell = register.orderdetail.reduce((sum, item) => sum + item.sellPrice * item.quantity, 0);
      const totalCost = register.orderdetail.reduce((sum, item) => sum + item.costPrice * item.quantity, 0);
      const abonos = register.sales.reduce((sum, item) => sum + item.abono, 0);
      
      return {
        id: register.id,
        orderDate: register.orderDate,
        fullname,
        totalSell,
        abonos,
        saldo: totalSell - abonos,
        profit: totalSell - totalCost
      };
    });

    return processedRegisters;
  }

  async findOne(id) {
    const register = await models.Orders.findByPk(id, {
      include: [
        {
          association: 'client',
          attributes: ['name', 'lastname']
        },
        {
          association: 'orderdetail',
        },
        {
          association: 'sales',
          attributes: ['abono']
        }
      ]
    });
    if (!register) {
      throw boom.notFound(`${registerName} not found`);
    }

    const abonos = register.sales.reduce((sum, item) => sum + item.abono, 0);

    const processedRegister = {
      id: register.id,
      orderDate: register.orderDate,
      clientId: register.clientId,
      fullname: `${register.client.name} ${register.client.lastname}`,
      state: register.state,
      abonos,
      orderdetail: register.orderdetail
    };

    return processedRegister;
  }

  async update(id, changes) {
    const register = await models.Orders.findByPk(id);
    const data = await register.update(changes);
    return data;
  }
  
  async delete(id) {
    const register = await models.Orders.findByPk(id);
    await register.destroy();
    return { id };
  }
}

module.exports = OrdersService;

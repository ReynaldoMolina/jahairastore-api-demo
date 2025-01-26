//create app with express
const express = require('express');
const OrdersDetailsService = require('../services/ordersDetails.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createOrderSchema, updateOrderSchema, getOrderSchema } = require('../schemas/ordersDetails.schema');

const router = express.Router();
const service = new OrdersDetailsService();

//get all registers
router.get('/', async (req, res) => {
    const ordersDetails = await service.find();
    res.json(ordersDetails);
});

//register filter
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderDetails = await service.findOne(id);
      res.json(orderDetails);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrderDetail = await service.create(body);
    res.status(201).json(newOrderDetail);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const orderDetails = await service.update(id, body);
      res.json(orderDetails);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const orderDetails = await service.delete(id);
        res.json(orderDetails);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
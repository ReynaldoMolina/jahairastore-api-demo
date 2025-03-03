//create app with express
const express = require('express');
const SalesService = require('../services/sales.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createSaleSchema, updateSaleSchema, getSaleSchema } = require('../schemas/sales.schema');

const router = express.Router();
const service = new SalesService();

//get all registers
router.get('/', async (req, res) => {
  const sales = await service.find();
  res.json(sales);
});

//register filter
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getSaleSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const sale = await service.findOne(id);
      res.json(sale);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createSaleSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newSale = await service.create(body);
    res.status(201).json(newSale);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getSaleSchema, 'params'),
  validatorHandler(updateSaleSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const sale = await service.update(id, body);
      res.json(sale);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const sale = await service.delete(id);
        res.json(sale);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
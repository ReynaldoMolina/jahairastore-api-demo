//create app with express
const express = require('express');
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products.schema');

const router = express.Router();
const service = new ProductsService();

//get all registers
router.get('/', async (req, res) => {
    const products = await service.find();
    res.json(products);
});

//register filter
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const product = await service.delete(id);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
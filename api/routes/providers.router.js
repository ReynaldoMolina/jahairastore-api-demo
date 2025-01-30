//create app with express
const express = require('express');
const ProvidersService = require('../services/providers.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createProviderSchema, updateProviderSchema, getProviderSchema } = require('../schemas/providers.schema');

const router = express.Router();
const service = new ProvidersService();

//get all registers
router.get('/', async (req, res) => {
  const providers = await service.find();
  res.json(providers);
});

//register filter
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getProviderSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const provider = await service.findOne(id);
      res.json(provider);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createProviderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProvider = await service.create(body);
    res.status(201).json(newProvider);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getProviderSchema, 'params'),
  validatorHandler(updateProviderSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const provider = await service.update(id, body);
      res.json(provider);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const provider = await service.delete(id);
      res.json(provider);
    } catch (error) {
      next(error);
    }
});

module.exports = router;
//create app with express
const express = require('express');
const ClientsService = require('./../services/clients.service')
const validatorHandler = require('./../middlewares/validator.handler');
const { createClientSchema, updateClientSchema, getClientSchema } = require('./../schemas/clients.schema');

const router = express.Router();
const service = new ClientsService();

//get all registers
router.get('/', async (req, res) => {
    const clients = await service.find();
    res.json(clients);
});

//register filter
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) => {
    try {
        const { id } = req.params;
        const client = await service.findOne(id);
        res.json(client);
    } catch (error) {
        next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createClientSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newClient = await service.create(body);
    res.status(201).json(newClient);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getClientSchema, 'params'),
  validatorHandler(updateClientSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const client = await service.update(id, body);
      res.json(client);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const client = await service.delete(id);
        res.json(client);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
//create app with express
const express = require('express');
const ClientsService = require('./../services/clients.service')

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
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await service.findOne(id);
  res.json(client);
});

//create register
router.post('/', async (req, res) => {
  const body = req.body;
  const newClient = await service.create(body);
  res.status(201).json(newClient);
});

//update register (some data)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const client = await service.update(id, body);
    res.json(client);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});

//delete register
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const client = await service.delete(id);
  res.json(client);
});

module.exports = router;
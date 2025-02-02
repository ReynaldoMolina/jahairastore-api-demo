//create app with express
const express = require('express');
const ReceiptsService = require('../services/receipts.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createReceiptSchema, updateReceiptSchema, getReceiptSchema } = require('../schemas/receipts.schema');

const router = express.Router();
const service = new ReceiptsService();

//get all registers
router.get('/', async (req, res) => {
    const receipts = await service.find();
    res.json(receipts);
});

//register filter
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getReceiptSchema, 'params'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const receipt = await service.findOne(id);
      res.json(receipt);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createReceiptSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newReceipt = await service.create(body);
    res.status(201).json(newReceipt);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getReceiptSchema, 'params'),
  validatorHandler(updateReceiptSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const receipt = await service.update(id, body);
      res.json(receipt);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const receipt = await service.delete(id);
        res.json(receipt);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
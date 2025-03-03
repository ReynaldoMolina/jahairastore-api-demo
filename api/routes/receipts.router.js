//create app with express
const express = require('express');
const ReceiptsService = require('../services/receipts.service')
const validatorHandler = require('../middlewares/validator.handler');
const { getReceiptSchema } = require('../schemas/receipts.schema');

const router = express.Router();
const service = new ReceiptsService();

// //get all registers
// router.get('/', async (req, res) => {
//   const receipts = await service.find();
//   res.json(receipts);
// });

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

module.exports = router;
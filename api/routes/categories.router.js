//create app with express
const express = require('express');
const CategoriesService = require('../services/categories.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categories.schema');

const router = express.Router();
const service = new CategoriesService();

//get all registers
router.get('/', async (req, res) => {
    const categories = await service.find();
    res.json(categories);
});

//register filter
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

//create register
router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  }
);

//update register (some data)
router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

//delete register
router.delete('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const category = await service.delete(id);
        res.json(category);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
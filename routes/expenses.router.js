//crear app con express
const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

//get all registers
router.get('/', (req, res) => {
  const expenses = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    expenses.push({
      id: index,
      company: faker.company.name(),
      expense: faker.commerce.price()
    });
  }

  res.json(expenses);
});

//register filter
router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//get url parameters - get one register
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Shein co'
    }
  );
});

//create register
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Register created',
    data: body
  });
});

//update register (some data)
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id,
    message: 'Register updated',
    data: body
  });
});

//delete register
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    message: 'Register deleted',
  });
});

module.exports = router;
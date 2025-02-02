const express = require('express');

const clientsRouter = require('./clients.router');
const ordersRouter = require('./orders.router');
const ordersDetailsRouter = require('./ordersdetails.router');
const receiptsRouter = require('./receipts.router');
const providersRouter = require('./providers.router');
const expensesRouter = require('./expenses.router');
// const purchasesRouter = require('./purchases.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/clients', clientsRouter);
  router.use('/orders', ordersRouter);
  router.use('/ordersdetails', ordersDetailsRouter);
  router.use('/receipts', receiptsRouter);
  router.use('/providers', providersRouter);
  // router.use('/purchases', purchasesRouter);
  router.use('/expenses', expensesRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}

/*
//obtener parametros query
router.get('/', (req, res) => {
  console.log(req);
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros query');
  }
});
*/

module.exports = routerApi;
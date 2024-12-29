const express = require('express');

const categoriesRouter = require('./categories.router');
const clientsRouter = require('./clients.router');
const expensesRouter = require('./expenses.router');
const ordersRouter = require('./orders.router');
const productsRouter = require('./products.router');
const providersRouter = require('./providers.router');
const receiptsRouter = require('./receipts.router');
const purchasesRouter = require('./purchases.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/categories', categoriesRouter);
    router.use('/clients', clientsRouter);
    router.use('/expenses', expensesRouter);
    router.use('/orders', ordersRouter);
    router.use('/products', productsRouter);
    router.use('/providers', providersRouter);
    router.use('/receipts', receiptsRouter);
    router.use('/purchases', purchasesRouter);
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
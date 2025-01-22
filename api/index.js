//crear app con express
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.port || 3001;

app.use(express.json());

const whitelist = [
  'http://localhost:3000',
  'http://localhost:5500',
  'http://192.168.1.9:3000',
  'https://reynaldomolina.github.io'
];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    }
    else {
      callback(new Error('No permitido'));
    }
  }
};
app.use(cors(options));

//create endpoints
app.get('/api', (req, res) => {
  res.send('Hola, esta es la pagina de la tienda');
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//emmpezar a escuchar en el puerto
app.listen(port, () => {
  console.log(`Mi puerto: ${port}`);
});

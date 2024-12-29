//crear app con express
const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

//create endpoints
app.get('/', (req, res) => {
  res.send('Hola, esta es la pagina de la tienda');
});

routerApi(app);

//emmpezar a escuchar en el puerto
app.listen(port, () => {
  console.log(`Mi puerto: ${port}`);
});

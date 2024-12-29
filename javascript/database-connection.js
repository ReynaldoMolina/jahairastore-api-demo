import { createConnection } from 'mysql';

var connection = createConnection({
  host: "127.0.0.1",
  user: "manjaro",
  password: "manjaro"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
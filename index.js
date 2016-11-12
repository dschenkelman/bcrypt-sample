var express = require('express');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var app = express();

var store = {
  // el hash este es para la password 'secret'
  'user1': '$2a$10$HjfPWNSmtwiXNpych1H8TO0tnf1HpsYrXAm8r85R.o/83pBEzxmh2'
};

app.post('/authorize', bodyParser.json(), function (req, res) {
  var passwordHash = store[req.body.username];
  if (!passwordHash){
    return res.status(401).end();
  }

  if (bcrypt.compareSync(req.body.password, passwordHash)){
    return res.status(200).end();
  }

  return res.status(401).end();
});

app.listen(3000, function () {
  console.log('Proveedor de identidad corriendo...');
});

process.on('SIGTERM', () => {
  process.exit(0);
});
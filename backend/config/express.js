
const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {

  const app = express();

  app.set('port', 8085);

  app.use(express.static('../frontend/dist'));
  app.use(bodyParser.urlencoded({extended: true}));

  consign({cwd: process.cwd() + "/"})
    .include('app/models')
    .include('app/routes')
    .then('app/controllers')
    .into(app);

  return app;
};

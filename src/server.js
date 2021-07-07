'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const morgan = require('morgan');
app.use(morgan('dev'));
const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/clothes');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
  res.send ('Hello From Sukina Class 9 !');
});

app.use('/api/v1/food',foodRoute);
app.use('/api/v1/clothes',clothesRoute);

app.use(errorHandler);
app.use('*', notFoundHandler);

function start (port){
  app.listen(port, () => {
    console.log (`App is listening on the port ${port}`);
  });
}

module.exports = {
  app : app,
  start :start,
};

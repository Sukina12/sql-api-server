'use strict';

require('dotenv').config();
const server = require('./src/server');
const pool = require('./src/models/pool');

const port = process.env.PORT || 9000;

pool.connect().then (() => {
    server.start(port);
})
.catch ((e) => {
    console.error ('Connection Error', e.message);
});

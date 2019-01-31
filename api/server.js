const express = require('express');

const server = express();

const footballers = require('../footballers/footballersModel');

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'working!' });
});

module.exports = server;

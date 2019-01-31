const express = require('express');

const footballers = require('../footballers/footballersModel');

const server = express();

server.use(express.json());

const db = require('../data/dbConfig');

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'working!' });
});

server.get('/footballers', async (req, res) => {
  try {
    const players = await footballers.getAll();
    res.status(200).json(players);
  } catch (error) {
    console.log('Error =', error);
  }
});

server.post('/footballers', async (req, res) => {
  try {
    const name = req.body;
    console.log('Player =', name);
    const playerId = await db('footballers').insert(name);
    console.log('Player info', playerId);
    res.status(201).json({ hello: `${name.name}` });
  } catch (error) {
    console.log('Error:', error);
  }
});

module.exports = server;

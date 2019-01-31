const db = require('../data/dbConfig');

module.exports = {
  insert,
  getAll
};

async function insert(footballers) {
  const id = await db('footballers').insert(footballers);
  console.log('ID =', id);
  return db('footballers')
    .where({ id })
    .first();
}

function getAll() {
  return db('footballers');
}

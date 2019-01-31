exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('footballers')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('footballers').insert([
        { name: 'Mo Salah' },
        { name: 'Steven Gerrard' },
        { name: 'Kenny Dalglish' }
      ]);
    });
};

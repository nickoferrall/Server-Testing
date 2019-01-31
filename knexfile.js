// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/footballers.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'footballers'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: { filename: './data/lambda.sqlite3' },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//       tableName: 'dbmigrations',
//     },
//     seeds: { directory: './data/seeds' },
//   },
// };

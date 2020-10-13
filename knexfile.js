// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // connection: {
    //   database: 'my_db',
    //   user: 'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./dev.sqlite3"
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys = ON", done);
//       }
//     },
//     migrations: {
//       directory: "./migrations"
//     },
//     seeds: {
//       directory: "./seeds"
//     }
//   },

//   production: {
//     client: "pg",
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: "./migrations"
//     },
//     seeds: {
//       directory: "./seeds"
//     }
//   },
//   testing: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: ":memory:"
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys = ON", done);
//       }
//     },
//     migrations: {
//       directory: "./migrations",
//       tableName: "knex_migrations"
//     },
//     seeds: {
//       directory: "./seeds"
//     }
//   }
// };

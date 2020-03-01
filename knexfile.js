// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "Terry",
      password: "123456",
      database: "code_test_payment_server"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};

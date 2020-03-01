exports.up = function(knex) {
  return knex.schema.createTable("transactions", table => {
    table.increments("transaction_id");
    table
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("user_id")
      .inTable("users");
    table
      .string("transaction_type", 3)
      .notNullable()
      .references("abbrev")
      .inTable("transaction_types");

    table
      .float("amount", 8, 1)
      .notNullable()
      .defaultTo(0)
      .unsigned();

    table
      .float("balance", 8, 1)
      .notNullable()
      .defaultTo(0)
      .unsigned();

    table.datetime("trans_dateTime").defaultTo(knex.fn.now());
    table.index(["user_id"]);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("transactions");
};

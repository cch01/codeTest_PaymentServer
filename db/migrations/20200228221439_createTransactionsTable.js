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
      .float("amount", 8, 1)
      .notNullable()
      .defaultTo(0)
      .unsigned();

    table
      .string("transaction_type", 3)
      .notNullable()
      .references("abbrev")
      .inTable("transaction_types");

    table.datetime("trans_datetime").defaultTo(knex.fn.now());
    table.timestamps(true, true);
    table.index(["user_id", "transaction_type"]);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("transactions");
};

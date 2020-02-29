exports.up = function(knex) {
  return knex.schema.createTable("transaction_types", table => {
    table.increments("trans_type_id");
    table
      .string("trans_type", 20)
      .notNullable()
      .unique();
    table.string("abbrev", 3).unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("transaction_types");
};

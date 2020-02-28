exports.up = function(knex) {
  return knex.schema
    .createTable("transaction_types", table => {
      table.increments("trans_type_id");
      table
        .string("trans_type", 20)
        .notNullable()
        .unique();
      table.string("abbrev", 3).unique();
      table.timestamps(true, true);
    })
    .then(() => {
      return knex
        .insert([
          { trans_type: "paid", abbrev: "+" },
          { trans_type: "received", abbrev: "-" }
        ])
        .into("transaction_types");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("transaction_types");
};

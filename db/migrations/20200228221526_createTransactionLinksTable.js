exports.up = function(knex) {
  return knex.schema.createTable("transaction_links", table => {
    table.increments("link_id");
    table
      .integer("payer_trans_id")
      .unsigned()
      .notNullable()
      .references("transaction_id")
      .inTable("transactions");
    table
      .integer("payee_trans_id")
      .unsigned()
      .notNullable()
      .references("transaction_id")
      .inTable("transactions");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("transaction_links");
};

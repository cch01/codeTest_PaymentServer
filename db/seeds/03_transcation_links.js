exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("transaction_links")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transaction_links").insert([
        { payer_trans_id: 5, payee_trans_id: 4 },
        { payer_trans_id: 6, payee_trans_id: 7 }
      ]);
    });
};

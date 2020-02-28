exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("transaction_links")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transaction_links").insert([
        { link_id: 1, payer_trans_id: 5, payee_trans_id: 4 },
        { link_id: 2, payer_trans_id: 6, payee_trans_id: 7 }
      ]);
    });
};

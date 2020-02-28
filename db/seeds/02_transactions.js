exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        { user_id: 1, amount: 100, transaction_type: "+" },
        { user_id: 2, amount: 120, transaction_type: "+" },
        { user_id: 3, amount: 50, transaction_type: "+" },

        { user_id: 2, amount: 5.5, transaction_type: "+" },
        { user_id: 1, amount: 5.5, transaction_type: "-" },
        { user_id: 3, amount: 6.4, transaction_type: "-" },
        { user_id: 2, amount: 6.4, transaction_type: "+" }
      ]);
    });
};

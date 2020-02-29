exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        //initial deposite
        { user_id: 1, transaction_type: "+", amount: 100, balance: 100 },
        { user_id: 2, transaction_type: "+", amount: 120, balance: 120 },
        { user_id: 3, transaction_type: "+", amount: 50, balance: 50 },
        { user_id: 4, transaction_type: "+", amount: 500, balance: 500 },
        { user_id: 5, transaction_type: "+", amount: 140, balance: 140 },
        { user_id: 6, transaction_type: "+", amount: 790, balance: 790 },
        //transactions
        { user_id: 2, transaction_type: "+", amount: 5.5, balance: 125.5 },
        { user_id: 1, transaction_type: "-", amount: 5.5, balance: 94.5 },
        { user_id: 3, transaction_type: "-", amount: 6.4, balance: 43.6 },
        { user_id: 2, transaction_type: "+", amount: 6.4, balance: 126.4 }
      ]);
    });
};

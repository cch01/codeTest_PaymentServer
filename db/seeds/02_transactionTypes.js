exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("transaction_types")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transaction_types").insert([
        { trans_type: "paid", abbrev: "-" },
        { trans_type: "received", abbrev: "+" }
      ]);
    });
};

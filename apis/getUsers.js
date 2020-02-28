import knex from "../db/knex";

export default (req, res) => {
  knex
    .raw(
      `SELECT 
    u.user_id, SUM(CASE WHEN t.transaction_type='+' 
    THEN t.amount ELSE -t.amount END) AS balance
    FROM users u JOIN transactions t 
    ON u.user_id = t.user_id 
    GROUP BY user_id`
    )
    .then(result => {
      console.log("got Users successfully");
      return res.json(result[0]);
    })
    .catch(err => {
      console.log(err);
      return res.status(400);
    });
};

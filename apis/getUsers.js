import knex from "../db/knex";


export default (req, res) => {
  knex
    .raw(
      `SELECT t1.user_id,t1.balance FROM transactions t1 
      INNER JOIN
      (SELECT user_id, MAX(transaction_id) AS max_trans_id FROM transactions GROUP BY user_id)
      AS t2
      ON t1.transaction_id = t2.max_trans_id ORDER BY t1.user_id`
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

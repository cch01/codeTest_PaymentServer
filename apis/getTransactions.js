import knex from "../db/knex";

export default (req, res) => {

  knex("transactions as a")
    .select(
      "tl.link_id",
      "a.user_id as payer_id",
      "b.user_id as payee_id",
      "a.amount"
    )
    .join("transactions as b")
    .join("transaction_links as tl", {
      "a.transaction_id": "tl.payer_trans_id",
      "b.transaction_id": "tl.payee_trans_id"
    })
    .orderBy("tl.link_id")
    .then(result => {
      console.log("Query for transactions successed");
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      return res.status(400);
    });
};

import knex from "../db/knex";

export default async (payer_trans_id, payee_trans_id) => {
  await knex("transaction_links").insert({
    payer_trans_id: payer_trans_id,
    payee_trans_id: payee_trans_id
  });
};

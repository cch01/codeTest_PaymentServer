import knex from "../db/knex";

export default async (newTransaction, payerBalance, payeeBalance) => {
  let payerTransId, payeeTransId;

  await knex("transactions")
    .insert({
      user_id: newTransaction.payer_user_id,
      transaction_type: "-",
      amount: newTransaction.amount,
      balance: payerBalance - newTransaction.amount
    })
    .then(inserted_payer_trans_id => {
      payerTransId = inserted_payer_trans_id;
    });

  await knex("transactions")
    .insert({
      user_id: newTransaction.payee_user_id,
      transaction_type: "+",
      amount: newTransaction.amount,
      balance: payeeBalance + newTransaction.amount
    })
    .then(inserted_payee_trans_id => {
      payeeTransId = inserted_payee_trans_id;
    });

  return [payerTransId, payeeTransId];
};

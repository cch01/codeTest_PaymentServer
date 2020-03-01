import knex from "../db/knex";

export default async (newTransaction, payerBalance, payeeBalance) => {

  let payerTransId, payeeTransId;

  await knex("transactions")
    .insert([
      {
        user_id: newTransaction.payer_user_id,
        transaction_type: "-",
        amount: newTransaction.amount,
        balance: payerBalance - newTransaction.amount
      },
      {
        user_id: newTransaction.payee_user_id,
        transaction_type: "+",
        amount: newTransaction.amount,
        balance: payeeBalance + newTransaction.amount
      }
    ])
    .then(inserted_payer_trans_id => {
      console.log("Inserted trans number: " + inserted_payer_trans_id);
      payerTransId = Number(inserted_payer_trans_id);
      payeeTransId = Number(inserted_payer_trans_id) + 1;
    });

  return [payerTransId, payeeTransId];
};

import knex from "../db/knex";

export default async newTransaction => {
  let payerObj, payeeObj;
  await knex
    .raw(
      `SELECT t1.user_id ,t1.balance FROM transactions t1
      INNER JOIN
      (SELECT user_id, MAX(transaction_id) AS max_trans_id FROM transactions GROUP BY user_id)
      AS t2
      ON t1.transaction_id = t2.max_trans_id 
      where t1.user_id = ${newTransaction.payer_user_id} 
      OR t2.user_id = ${newTransaction.payee_user_id}
      ORDER BY t1.user_id
    `
    )

    .then(result => {
      payerObj = result[0].find(
        user => user.user_id === newTransaction.payer_user_id
      );
      payeeObj = result[0].find(
        user => user.user_id === newTransaction.payee_user_id
      );
    });
  return [payerObj, payeeObj];
};

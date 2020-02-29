import transInsertQuery from "../utils/transInsertQuery";
import transLinkInsertQuery from "../utils/transLinkInsertQuery";
import getBalanceQuery from "../utils/getBalanceQuery";

export default (req, res) => {
  let payerObj, payeeObj, payer_trans_id, payee_trans_id;
  console.log("Requested post: " + req.newTransaction);
  getBalanceQuery(req.newTransaction)
    .then(userObjs => {
      payerObj = userObjs[0];
      payeeObj = userObjs[1];

      if (payerObj.balance - req.newTransaction.amount < 0)
        return res.status(400).send("Payer has not enough balance");

      transInsertQuery(req.newTransaction, payerObj.balance, payeeObj.balance)
        .then(results => {
          payer_trans_id = results[0];
          payee_trans_id = results[1];

          transLinkInsertQuery(payer_trans_id, payee_trans_id)
            .then(() => {
              return res.status(200).send("Transaction posted successfully");
            })
            .catch(err => {
              console.log(err);
              return res.status(400).send("Error on adding transaction link ");
            });
        })
        .catch(err => {
          console.log(err);
          return res.status(400).send("Insertion error");
        });
    })
    .catch(err => {
      console.log(err);
      return res.status(400).send("Requested user not exist");
    });
};

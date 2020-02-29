import transactionSchema from "../schema/index";

export default (req, res, next) => {
  console.log("incoming: " + req.body);
  req.newTransaction = req.body.transaction;
  if (
    typeof req.newTransaction === "undefined" ||
    req.newTransaction.payer_user_id === req.newTransaction.payee_user_id
  )
    return res.status(400).send("Please provide transaction data");

  const { error } = transactionSchema.validate(req.newTransaction);

  if (typeof error !== "undefined") {
    console.log(error);
    return res
      .status(400)
      .send(
        "Transaction object not match. Please provide correct transaction data"
      );
  }
  console.log("Transaction verification successed");
  next();
};

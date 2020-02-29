import transactionSchema from "../schema/index";

export default (req, res, next) => {
  req.newTransaction = req.body.transaction;
  if (typeof req.newTransaction === "undefined")
    return res.status(400).send("please provide transaction data");

  const { error } = transactionSchema.validate(req.newTransaction);

  if (typeof error !== "undefined") {
    console.log(error);
    return res.status(400).send("transaction object not match");
  }
  console.log("transaction verification successed");
  next();
};

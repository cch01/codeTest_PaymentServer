import express from "express";
import getUsers from "./apis/getUsers";
import getTransactions from "./apis/getTransactions";
//import newTransaction from "./apis/postTransaction";

const router = express.Router();

router.get("/api/get/users", getUsers);
router.get("/api/get/transactions", getTransactions);
//router.post("/api/post/transaction", postTransaction);

export default router;

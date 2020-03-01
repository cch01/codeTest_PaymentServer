import express from "express";
import getUsers from "./apis/getUsers";
import getTransactions from "./apis/getTransactions";
import postTransaction from "./apis/postTransaction";
import verifyTransaction from "./utils/verifyTransaction";

const router = express.Router();

router.get("/api/get/users", getUsers);
router.get("/api/get/transactions", getTransactions);
router.post("/api/post/transaction", verifyTransaction, postTransaction);

export default router;

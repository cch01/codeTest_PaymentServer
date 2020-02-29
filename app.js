import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

export default app;

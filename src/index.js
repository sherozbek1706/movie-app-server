import express from "express";
import { config } from "./shared/config/index.js";
import { db } from "./db/index.js";

const app = express();

db();

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`);
});

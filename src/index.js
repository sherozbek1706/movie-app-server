import express from "express";
import { config } from "./shared/config/index.js";
import { db } from "./db/index.js";

const app = express();

// import handleError
import handleError from "./shared/errors/handle.js";

db();

// Middleware Error
app.use(handleError);

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`);
});

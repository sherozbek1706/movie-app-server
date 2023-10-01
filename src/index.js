import express from "express";
import { config } from "./shared/config/index.js";

const app = express();

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`);
});

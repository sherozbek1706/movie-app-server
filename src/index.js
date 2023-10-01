import express from "express";
import { config } from "./shared/config/index.js";
import { db } from "./db/index.js";
import cors from "cors";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// import handleError
import handleError from "./shared/errors/handle.js";

// public fayl'ni public qilish yo'li
app.use("/files", express.static(path.join(__dirname, "public")));

// middleware
app.use(cors());
app.use(express.json());

db();

// Middleware Error
app.use(handleError);

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`);
});

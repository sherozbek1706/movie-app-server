import express from "express";
import { config } from "./shared/config/index.js";
import { db } from "./db/index.js";
import swaggerUi from "swagger-ui-express";
import { swaggerFile } from "./shared/swagger/swagger-output.js";
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
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// import router
import categoryRoute from "./modules/category/_api.js";
import typeRoute from "./modules/type/_api.js";
import moviesRoute from "./modules/movies/_api.js";

// register router from middleware
app.use(categoryRoute);
app.use(typeRoute);
app.use(moviesRoute);

db();

// Middleware Error
app.use(handleError);

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT ${config.port}`);
});

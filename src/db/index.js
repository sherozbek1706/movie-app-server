import mongoose from "mongoose";
import { config } from "../shared/config/index.js";

export const db = () => {
  mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
};

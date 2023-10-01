import mongoose from "mongoose";
import { config } from "../shared/config/index.js";

export const db = () => {
  mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`)
    .then(() => {
      console.log("SERVER HAS BEEN CONNECTED TO DATABASE SUCCESSFULL");
    })
    .catch(() => {
      console.log("SERVER CAN NOT CONNECT TO DATABASE");
    });
};

import { BadRequestError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const add = async ({ body }) => {
  return Admin.create({ ...body, password: hashedPassword });
};

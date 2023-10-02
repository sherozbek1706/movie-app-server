import { BadRequestError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const add = async ({ body }) => {
  const { username, password } = body;

  const existing = await Admin.findOne({ username });
  if (existing) {
    throw new BadRequestError("This username already exist!");
  }

  return Admin.create({ ...body, password: hashedPassword });
};

import { NotFoundError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const edit = async ({ params, body }) => {
  return Admin.findByIdAndUpdate(
    params.id,
    { ...body, password: bcrypt.hashSync(password, 10) },
    { new: true }
  );
};

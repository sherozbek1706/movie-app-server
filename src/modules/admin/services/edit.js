import { NotFoundError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const edit = async ({ params, body }) => {

  const exis_username = await Admin.findOne({ username });
  if (existing.username != username && exis_username) {
    throw new BadRequestError("This username already exist!");
  }

  return Admin.findByIdAndUpdate(
    params.id,
    { ...body, password: bcrypt.hashSync(password, 10) },
    { new: true }
  );
};

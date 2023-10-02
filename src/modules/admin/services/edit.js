import { NotFoundError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const edit = async ({ params, body }) => {
  const { username, password, ...data } = body;

  const existing = await Admin.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Admin Not Found!");
  }

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

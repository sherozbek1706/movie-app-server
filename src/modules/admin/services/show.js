import { NotFoundError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";

export const show = async ({ params }) => {
  const existing = await Admin.findOne({ _id: params.id, is_deleted: false });
  if (!existing) {
    throw new NotFoundError("Admin Not Found!");
  }

  return existing;
};

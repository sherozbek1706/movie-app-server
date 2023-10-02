import { NotFoundError } from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";

export const remove = async ({ params }) => {
  const existing = await Admin.findOne({ _id: params.id, is_deleted: false });
  if (!existing) {
    throw new NotFoundError("Admin Not Found!");
  }

  return Admin.findByIdAndUpdate(
    params.id,
    { is_deleted: true },
    { new: true }
  );
};

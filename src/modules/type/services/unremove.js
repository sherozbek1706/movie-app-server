import { NotFoundError } from "../../../shared/errors/index.js";
import Type from "../models/Type.js";

export const unremove = async ({ params }) => {
  const existing = await Type.findOne({
    _id: params.id,
    is_deleted: true,
  });
  if (!existing) {
    throw new NotFoundError("Type Not Found!");
  }

  return Type.findByIdAndUpdate(
    params.id,
    { is_deleted: false },
    { new: true }
  );
};

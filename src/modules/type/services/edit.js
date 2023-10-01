import { NotFoundError } from "../../../shared/errors/index.js";
import Type from "../models/Type.js";

export const edit = async ({ params, body }) => {
  const existing = await Type.findOne({
    _id: params.id,
    is_deleted: false,
  });
  if (!existing) {
    throw new NotFoundError("Type Not Found!");
  }

  return Type.findByIdAndUpdate(params.id, { ...body }, { new: true });
};

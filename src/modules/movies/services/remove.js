import { NotFoundError } from "../../../shared/errors/index.js";
import Movies from "../models/Movies.js";

export const remove = async ({ params }) => {
  const existing = await Movies.findOne({
    _id: params.id,
    is_deleted: false,
  });
  if (!existing) {
    throw new NotFoundError("Movies Not Found!");
  }

  return Movies.findByIdAndUpdate(
    params.id,
    { is_deleted: true },
    { new: true }
  );
};

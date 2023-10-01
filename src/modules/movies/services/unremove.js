import { NotFoundError } from "../../../shared/errors/index.js";
import Movies from "../models/Movies.js";

export const unremove = async ({ params }) => {
  const existing = await Movies.findOne({
    _id: params.id,
    is_deleted: true,
  });

  if (!existing) {
    throw new NotFoundError("Movies Not Found!");
  }

  return Movies.findByIdAndUpdate(
    params.id,
    { is_deleted: false },
    { new: true }
  );
};

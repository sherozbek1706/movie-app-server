import { NotFoundError } from "../../../shared/errors/index.js";
import Movies from "../models/Movies.js";

export const remove = async ({ params }) => {
  return Movies.findByIdAndUpdate(
    params.id,
    { is_deleted: true },
    { new: true }
  );
};

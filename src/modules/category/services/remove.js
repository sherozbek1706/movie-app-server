import { NotFoundError } from "../../../shared/errors/index.js";
import Category from "../models/Category.js";

export const remove = async ({ params }) => {
  return Category.findByIdAndUpdate(
    params.id,
    { is_deleted: true },
    { new: true }
  );
};

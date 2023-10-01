import { NotFoundError } from "../../../shared/errors/index.js";
import Category from "../models/Category.js";

export const unremove = async ({ params }) => {
  const existing = await Category.findOne({
    _id: params.id,
    is_deleted: true,
  });
  if (!existing) {
    throw new NotFoundError("Category Not Found!");
  }

  return Category.findByIdAndUpdate(
    params.id,
    { is_deleted: false },
    { new: true }
  );
};

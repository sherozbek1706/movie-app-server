import Movies from "../models/Movies.js";
import Type from "../../type/models/Type.js";
import Category from "../../category/models/Category.js";
import { NotFoundError } from "../../../shared/errors/index.js";

export const edit = async ({ body, params, image }) => {
  const { type_id, category_id } = body;

  const existing = await Movies.findOne({ _id: params.id, is_deleted: false });

  if (!existing) {
    throw new NotFoundError("Movies Not Found!");
  }

  const existingType = await Type.findOne({ _id: type_id, is_deleted: false });

  if (!existingType) {
    throw new NotFoundError("Type Not Found!");
  }

  const existingCategory = await Category.findOne({
    _id: category_id,
    is_deleted: false,
  });

  if (!existingCategory) {
    throw new NotFoundError("Category Not Found!");
  }

  return Movies.findByIdAndUpdate(
    { _id: params.id },
    { ...body, image },
    { new: true }
  );
};

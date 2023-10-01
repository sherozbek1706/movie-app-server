import Movies from "../models/Movies.js";
import Type from "../../type/models/Type.js";
import Category from "../../category/models/Category.js";
import { NotFoundError } from "../../../shared/errors/index.js";

export const add = async ({ body, image }) => {
  const { type_id, category_id } = body;

  const existingType = await Type.findOne({ _id: type_id, is_deleted: false });

  if (!existingType) {
    throw new NotFoundError("Type Not Found!");
  }

  return Movies.create({ ...body, image });
};

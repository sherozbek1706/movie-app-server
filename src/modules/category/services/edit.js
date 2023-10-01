import { NotFoundError } from "../../../shared/errors/index.js";
import Category from "../models/Category.js";

export const edit = async ({ params, body }) => {

  return Category.findByIdAndUpdate(params.id, { ...body }, { new: true });
};

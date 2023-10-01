import Movies from "../models/Movies.js";
import Type from "../../type/models/Type.js";
import Category from "../../category/models/Category.js";
import { NotFoundError } from "../../../shared/errors/index.js";

export const edit = async ({ body, params, image }) => {
  return Movies.findByIdAndUpdate(
    { _id: params.id },
    { ...body, image },
    { new: true }
  );
};

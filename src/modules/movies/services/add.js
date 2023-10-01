import Movies from "../models/Movies.js";
import Type from "../../type/models/Type.js";
import Category from "../../category/models/Category.js";
import { NotFoundError } from "../../../shared/errors/index.js";

export const add = async ({ body, image }) => {
  return Movies.create({ ...body, image });
};

import { NotFoundError } from "../../../shared/errors/index.js";
import Type from "../models/Type.js";

export const edit = async ({ params, body }) => {

  return Type.findByIdAndUpdate(params.id, { ...body }, { new: true });
};

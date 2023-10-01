import Type from "../models/Type.js";

export const list = async () => {
  return Type.find({ is_deleted: false });
};

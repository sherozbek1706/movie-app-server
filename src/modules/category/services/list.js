import Category from "../models/Category.js";

export const list = async () => {
  return Category.find({ is_deleted: false });
};

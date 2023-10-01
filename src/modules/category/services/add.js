import Category from "../models/Category.js";

export const add = async ({ body }) => {
  return Category.create(body); 
};

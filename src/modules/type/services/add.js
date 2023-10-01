import Type from "../models/Type.js";

export const add = async ({ body }) => {
  return Type.create(body); 
};

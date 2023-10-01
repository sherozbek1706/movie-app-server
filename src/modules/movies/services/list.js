import Movies from "../models/Movies.js";

export const list = async () => {
  return Movies.find({ is_deleted: false });
};

import Admin from "../models/Admin.js";

export const list = () => {
  return Admin.find({ is_deleted: false });
};

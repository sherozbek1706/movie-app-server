import {
  BadRequestError,
  NotFoundError,
} from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../../shared/config/index.js";
export const login = async ({ body }) => {
  const { username, password } = body;

  const exist_username = await Admin.findOne({ username });
  if (!exist_username) {
    throw new NotFoundError("This Username Not Found!");
  }

  return { token };
};

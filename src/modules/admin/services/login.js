import {
  BadRequestError,
  NotFoundError,
} from "../../../shared/errors/index.js";
import Admin from "../models/Admin.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../../shared/config/index.js";
export const login = async ({ body }) => {
  return { token };
};

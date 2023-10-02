import express from "express";
import { UnauthorizedError } from "../errors/index.js";
import { config } from "../config/index.js";
import jwt from "jsonwebtoken";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError("Unauthorized.");
    }
    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
};

import { Types } from "mongoose";
import express from "express";
import { NotFoundError } from "../errors/index.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const isMongoId = async (req, res, next) => {
  try {
    if (!Types.ObjectId.isValid(req.params.id)) {
      throw new NotFoundError("Sorry, Id incorrect!");
    }
    next();
  } catch (error) {
    next(error);
  }
};

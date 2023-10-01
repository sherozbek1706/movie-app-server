import express from "express";
import { add, edit, list, remove, unremove } from "./services/_index.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const addType = async (req, res, next) => {
  try {
    const result = await add({ body: req.body });

    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};


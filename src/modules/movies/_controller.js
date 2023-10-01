import express from "express";
import { add, edit, list, remove, show, unremove } from "./services/_index.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

export const addMovies = async (req, res, next) => {
  try {
    const result = await add({
      body: req.body,
      image: `/files/movies/${req.file.filename}`,
    });
    res.status(201).json({ data: result });
  } catch (error) {
    next(error);
  }
};


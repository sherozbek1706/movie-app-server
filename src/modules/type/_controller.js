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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const listType = async (req, res, next) => {
  try {
    const result = await list();

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const removeType = async (req, res, next) => {
  try {
    const result = await remove({ params: req.params });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const unremoveType = async (req, res, next) => {
  try {
    const result = await unremove({ params: req.params });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};


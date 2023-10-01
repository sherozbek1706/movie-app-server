import express from "express";
import { add, edit, list, remove, unremove } from "./services/index.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const addCategory = async (req, res, next) => {
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
export const listCategory = async (req, res, next) => {
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
export const removeCategory = async (req, res, next) => {
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
export const unremoveCategory = async (req, res, next) => {
  try {
    const result = await unremove({ params: req.params });

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
export const editCategory = async (req, res, next) => {
  try {
    const result = await edit({ params: req.params, body: req.body });

    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

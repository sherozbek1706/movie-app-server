import express from "express";
import {
  add,
  list,
  show,
} from "./services/_index.js";

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const addAdmin = async (req, res, next) => {
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
export const listAdmin = async (req, res, next) => {
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
export const showAdmin = async (req, res, next) => {
  try {
    const result = await show({ params: req.params });
    res.status(200).json({ data: result });
  } catch (error) {
    next(error);
  }
};

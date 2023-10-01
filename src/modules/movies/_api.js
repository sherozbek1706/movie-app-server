import { Router } from "express";
import {
  addMovies,
} from "./_controller.js";
import upload from "../../shared/upload/upload-movies.js";
const router = Router();

const mAddMovies = [upload];

router.post("/movies", mAddMovies, addMovies);

export default router;

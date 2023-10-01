import { Router } from "express";
import {
  addMovies,
  editMovies,
} from "./_controller.js";
import upload from "../../shared/upload/upload-movies.js";
const router = Router();

const mAddMovies = [upload];
const mEditMovies = [upload];

router.post("/movies", mAddMovies, addMovies);
router.put("/movies/:id", mEditMovies, editMovies);

export default router;

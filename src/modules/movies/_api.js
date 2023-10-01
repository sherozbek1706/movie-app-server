import { Router } from "express";
import {
  addMovies,
  editMovies,
  listMovies,
  removeMovies,
  showMovies,
  unremoveMovies,
} from "./_controller.js";
import upload from "../../shared/upload/upload-movies.js";
const router = Router();

const mAddMovies = [upload];
const mEditMovies = [upload];

router.post("/movies", mAddMovies, addMovies);
router.get("/movies", listMovies);
router.get("/movies/:id", showMovies);
router.delete("/movies/:id", removeMovies);
router.delete("/movies/un/:id", unremoveMovies);
router.put("/movies/:id", mEditMovies, editMovies);

export default router;

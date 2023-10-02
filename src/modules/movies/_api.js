import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
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

const mAddMovies = [upload, isLoggedIn];
const mShowMovies = [isMongoId];
const mRemoveMovies = [isLoggedIn, isMongoId];
const mUnRemoveMovies = [isLoggedIn, isMongoId];
const mEditMovies = [upload, isLoggedIn, isMongoId];

router.post("/movies", mAddMovies, addMovies);
router.get("/movies", listMovies);
router.get("/movies/:id", mShowMovies, showMovies);
router.delete("/movies/:id", mRemoveMovies, removeMovies);
router.delete("/movies/un/:id", mUnRemoveMovies, unremoveMovies);
router.put("/movies/:id", mEditMovies, editMovies);

export default router;

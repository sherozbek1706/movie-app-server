import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addCategory,
  editCategory,
  listCategory,
  removeCategory,
  unremoveCategory,
} from "./_controller.js";
const router = Router();

const mAddCategory = [isLoggedIn];
const mRemoveCategory = [isLoggedIn, isMongoId];
const mUnRemoveCategory = [isLoggedIn, isMongoId];
const mEditCategory = [isLoggedIn, isMongoId];

router.post("/category", mAddCategory, addCategory);
router.get("/category", listCategory);
router.delete("/category/:id", mRemoveCategory, removeCategory);
router.delete("/category/un/:id", mUnRemoveCategory, unremoveCategory);
router.patch("/category/:id", mEditCategory, editCategory);

export default router;

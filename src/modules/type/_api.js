import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addType,
  editType,
  listType,
  removeType,
  unremoveType,
} from "./_controller.js";
const router = Router();

const mAddType = [isLoggedIn];
const mRemoveType = [isLoggedIn, isMongoId];
const mUnRemoveType = [isLoggedIn, isMongoId];
const mEditType = [isLoggedIn, isMongoId];

router.post("/type", mAddType, addType);
router.get("/type", listType);
router.delete("/type/:id", mRemoveType, removeType);
router.delete("/type/un/:id", mUnRemoveType, unremoveType);
router.patch("/type/:id", mEditType, editType);

export default router;

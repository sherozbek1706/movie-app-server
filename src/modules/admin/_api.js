import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addAdmin,
  editAdmin,
  listAdmin,
  loginAdmin,
  removeAdmin,
  showAdmin,
  unremoveAdmin,
} from "./_controller.js";

const router = Router();

const mShowAdmin = [isLoggedIn, isMongoId];
const mRemoveAdmin = [isLoggedIn, isMongoId];
const mUnRemoveAdmin = [isLoggedIn, isMongoId];
const mEditAdmin = [isLoggedIn, isMongoId];

router.post("/admin/add", isLoggedIn, addAdmin);
router.get("/admin", isLoggedIn, listAdmin);
router.get("/admin/:id", mShowAdmin, showAdmin);
router.delete("/admin/:id", mRemoveAdmin, removeAdmin);
router.delete("/admin/un/:id", mUnRemoveAdmin, unremoveAdmin);
router.put("/admin/:id", mEditAdmin, editAdmin);
router.post("/admin/login", loginAdmin);

export default router;

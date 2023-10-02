import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addAdmin,
  editAdmin,
  listAdmin,
  loginAdmin,
  removeAdmin,
} from "./_controller.js";

const router = Router();

const mRemoveAdmin = [isLoggedIn, isMongoId];
const mEditAdmin = [isLoggedIn, isMongoId];

router.post("/admin/add", isLoggedIn, addAdmin);
router.get("/admin", isLoggedIn, listAdmin);
router.delete("/admin/:id", mRemoveAdmin, removeAdmin);
router.put("/admin/:id", mEditAdmin, editAdmin);
router.post("/admin/login", loginAdmin);

export default router;

import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addAdmin,
  editAdmin,
  listAdmin,
} from "./_controller.js";

const router = Router();

const mEditAdmin = [isLoggedIn, isMongoId];

router.post("/admin/add", isLoggedIn, addAdmin);
router.get("/admin", isLoggedIn, listAdmin);
router.put("/admin/:id", mEditAdmin, editAdmin);

export default router;

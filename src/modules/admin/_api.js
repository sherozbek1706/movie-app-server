import { Router } from "express";
import { isLoggedIn, isMongoId } from "../../shared/auth/_index.js";
import {
  addAdmin,
} from "./_controller.js";

const router = Router();


router.post("/admin/add", isLoggedIn, addAdmin);

export default router;

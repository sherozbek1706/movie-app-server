import { Router } from "express";
import {
  addCategory,
  listCategory,
} from "./_controller.js";
const router = Router();

router.post("/category", addCategory);
router.get("/category", listCategory);
export default router;

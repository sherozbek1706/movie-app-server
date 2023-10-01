import { Router } from "express";
import {
  addCategory,
  editCategory,
  listCategory,
} from "./_controller.js";
const router = Router();

router.post("/category", addCategory);
router.get("/category", listCategory);
router.patch("/category/:id", editCategory);

export default router;

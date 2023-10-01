import { Router } from "express";
import {
  addCategory,
} from "./_controller.js";
const router = Router();

router.post("/category", addCategory);
export default router;

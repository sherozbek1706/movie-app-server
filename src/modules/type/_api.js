import { Router } from "express";
import {
  addType,
  editType,
} from "./_controller.js";
const router = Router();

router.post("/type", addType);
router.patch("/type/:id", editType);

export default router;

import { Router } from "express";
import {
  addType,
  editType,
  listType,
} from "./_controller.js";
const router = Router();

router.post("/type", addType);
router.get("/type", listType);
router.patch("/type/:id", editType);

export default router;

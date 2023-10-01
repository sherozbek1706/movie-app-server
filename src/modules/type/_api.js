import { Router } from "express";
import {
  addType,
} from "./_controller.js";
const router = Router();

router.post("/type", addType);

export default router;

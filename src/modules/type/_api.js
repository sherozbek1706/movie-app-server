import { Router } from "express";
import {
  addType,
  editType,
  listType,
  removeType,
  unremoveType,
} from "./_controller.js";
const router = Router();

router.post("/type", addType);
router.get("/type", listType);
router.delete("/type/:id", removeType);
router.delete("/type/un/:id", unremoveType);
router.patch("/type/:id", editType);

export default router;

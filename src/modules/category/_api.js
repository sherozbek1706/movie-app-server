import { Router } from "express";
import {
  addCategory,
  editCategory,
  listCategory,
  removeCategory,
  unremoveCategory,
} from "./_controller.js";
const router = Router();

router.post("/category", addCategory);
router.get("/category", listCategory);
router.delete("/category/:id", removeCategory);
router.delete("/category/un/:id", unremoveCategory);
router.patch("/category/:id", editCategory);

export default router;
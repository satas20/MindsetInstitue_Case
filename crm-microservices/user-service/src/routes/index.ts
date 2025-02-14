import { Router } from "express";
import {
  loginUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = Router();

router.post("/login", loginUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

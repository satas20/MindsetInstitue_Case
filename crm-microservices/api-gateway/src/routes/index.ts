import { Router } from "express";
import userRoutes from "../../../user-service/src/routes";
import customerRoutes from "../../../customer-service/src/routes";
import salesRoutes from "../../../sales-service/src/routes";
import authMiddleware from "../middleware/auth";

const router = Router();

router.use("/users", userRoutes);
router.use("/customers", authMiddleware, customerRoutes);
router.use("/sales", authMiddleware, salesRoutes);

export default router;

import { Router } from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  addCustomerNote,
  updateCustomerNote,
} from "../controllers/customerController";

const router = Router();

router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.post("/:id/notes", addCustomerNote);
router.put("/:id/notes/:noteId", updateCustomerNote);

export default router;

import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

router.get("/", getAllServices);

router.get("/:id", getServiceById);

router.post("/", createService);

router.put("/:id", updateService);

router.delete("/:id", deleteService);

export default router;

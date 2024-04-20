const express = require("express");
const { PrismaClient } = require("@prisma/client");
const serviceController = require("../controllers/serviceController.js");

const router = express.Router();

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getServiceById);

router.post("/", serviceController.createService);

router.put("/:id", serviceController.updateService);

router.delete("/:id", serviceController.deleteService);

module.exports = router;

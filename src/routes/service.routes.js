const express = require("express");
const serviceController = require("@controllers/serviceController.js");

const router = express.Router();

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getServiceById);

router.post("/", serviceController.createService);

router.put("/:id", serviceController.updateService);

router.delete("/:id", serviceController.deleteService);

router.get("/created/:idUser", serviceController.getCreatedServicesByUserId);

router.get("/applied/:idUser", serviceController.getAppliedServicesByUserId);

router.post("/apply-service", serviceController.createRequest);

router.get("/service-requests/:idService",serviceController.getServiceRequests);

router.post("/accept-service-request", serviceController.acceptServiceRequest);


module.exports = router;

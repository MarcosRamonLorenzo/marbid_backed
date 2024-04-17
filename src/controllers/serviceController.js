import Service from "../models/service.js";
import { handleErr } from "../middleware/errorHandler.js";

const getAllServices = async (req, res) => {
  try {
    const services = await Service.getAll();

    res
      .status(200)
      .json({ status: "successful ", data: services, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.getById(req.params.id);

    res.status(200).json({ status: "successful", data: service, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const createService = async (req, res) => {
  const service = req.body;
  try {
    const newService = await Service.create(service);
    res
      .status(201)
      .json({ status: "successful", data: newService, error: null });
  } catch (error) {}
};

const updateService = async (req, res) => {
  const service = req.body;
  try {
    const updatedService = await Service.update(req.params.id, service);
    res
      .status(200)
      .json({ status: "successful", data: updatedService, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.deleteService(req.params.id);
    res
      .status(200)
      .json({ status: "successful", data: deletedService, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

export {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService,
};

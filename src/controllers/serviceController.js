import Service from "../models/service.js";

const getAllServices = async (req, res) => {
  try {
    const services = await Service.getAll();

    res
      .status(200)
      .json({ status: "successful ", data: services, error: null });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {};

const createService = async (req, res) => {};

const updateService = async (req, res) => {};

const deleteService = async (req, res) => {};

export {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService,
};

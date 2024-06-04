const Service = require("@models/service.js");
const { handleErr } = require("@errors/errorHandler");

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
  // Here I check that price is a float
  if (isNaN(service.price)) {
    return res.status(400).json({ status: "error", error:{ message: "El precio tiene que ser un número" }});
  }

  try {
    const newService = await Service.create(service);
    res
      .status(201)
      .json({ status: "successful", data: newService, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const updateService = async (req, res) => {
  const service = req.body;

   // Here I check that price is a float
   if (isNaN(service.price)) {
    return res.status(400).json({ status: "error", error:{ message: "El precio tiene que ser un número" }});
  }

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

const getCreatedServicesByUserId = async (req , res) =>{
  try {
    const services = await Service.getCreatedServicesByUser(req.params.idUser);
    res.status(200).json({status: "successful", data: services, error: null});
  } catch (error) {
    handleErr(error, req, res);
  }
}

const getAppliedServicesByUserId = async (req , res) =>{
  try {
    const services = await Service.getAppliedServicesByUser(req.params.idUser);
    res.status(200).json({status: "successful", data: services, error: null});
  } catch (error) {
    handleErr(error, req, res);
  }
}

const createRequest = async (req,res) => {
  try {
    const idService = req.body.idService;
    const idUser = req.body.idUser;
    const newRequest = await Service.createRequest(idService, idUser);
    res.status(201).json({status: "successful", data: newRequest, error: null});
  } catch (error) {
    handleErr(error, req, res);
  }

}

const getServiceRequests = async ( req , res ) =>{
  try {
    const services = await Service.getServiceRequests(req.params.idService);
    res.status(200).json({status: "successful", data: services, error: null});
  } catch (error) {
    handleErr(error, req, res);
  }

}


const acceptServiceRequest = async (req, res) => {
  try {
    const idUser = req.body.idUser;
    const idService = req.body.idService;
  
    // Aplicar usuario al servicio
    const updatedService = await Service.applyUserForService(idUser, idService);
  
    // Eliminar solicitudes de servicio
    if (updateService) await Service.deleteServiceRequests(idService);
  
    res.status(200).json({status: "successful", data: updatedService, error: null});

  } catch (error) {
    handleErr(error,req.res);
  }

} 


module.exports = {
  createService,
  deleteService,
  getAllServices,
  getServiceById,
  updateService,
  getCreatedServicesByUserId,
  getAppliedServicesByUserId,
  getServiceRequests,
  acceptServiceRequest,
  createRequest
};

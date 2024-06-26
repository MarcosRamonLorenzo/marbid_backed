const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  const services = await prisma.service.findMany({
    where: {
      status: false,
    },
    include: {
      authorCreated: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return services;
};

const getById = async (id) => {
  const service = await prisma.service.findUnique({
    where: { id: id },
    include: {
      authorCreated: true,
      category: true,
    },
  });
  return service;
};

const create = (service) => {
  const { title, content, category, image, price, authorCreated } = service;
  const newService = prisma.service.create({
    data: {
      title,
      content,
      image,
      price,
      authorCreated: {
        connect: {
          id: authorCreated,
        },
      },
      category: {
        connect: {
          id: category,
        },
      },
    },
  });
  return newService;
};

const update = async (id, service) => {
  const { title, content, categoryId, image, price } = service;
  const updatedService = await prisma.service.update({
    where: { id: id },
    data: {
      title,
      content,
      categoryId,
      image,
      price,
    },
  });
  return updatedService;
};

const deleteService = async (id) => {
  const deletedService = await prisma.service.delete({
    where: { id: id },
  });
  return deletedService;
};

const getCreatedServicesByUser = async (idUser) => {
  const services = await prisma.service.findMany({
    where: {
      authorCreatedId: idUser,
    },
    include: {
      authorCreated: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return services;
};

const getAppliedServicesByUser = async (idUser) => {
  const services = await prisma.service.findMany({
    where: {
      authorAppliedId: idUser,
    },
    include: {
      authorApplied: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return services;
};

const createRequest = (idService, idUser) => {
  const newServiceRequest = prisma.serviceRequest.create({
    data: {
      serviceId: idService,
      userId: idUser,
    },
  });
  return newServiceRequest;
};

const getServiceRequests = (idService) => {
  const serviceRequests = prisma.serviceRequest.findMany({
    where: {
      serviceId: idService,
    },
    include: {
      service: true,
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return serviceRequests;
};

const applyUserForService = async (idUser, idService) => {
  const updatedService = await prisma.service.update({
    where: { id: idService },
    data: {
      authorAppliedId: idUser,
      status: true,
    },
  });

  return updatedService;
};

const deleteServiceRequests = async (idService) => {
  const deletedServiceRequests = await prisma.serviceRequest.deleteMany({
    where: {
      serviceId: idService,
    },
  });
  return deletedServiceRequests;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteService,
  getCreatedServicesByUser,
  getAppliedServicesByUser,
  getServiceRequests,
  applyUserForService,
  deleteServiceRequests,
  createRequest,
};

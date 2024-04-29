const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  const services = await prisma.service.findMany();
  return services;
};

const getById = async (id) => {
  const service = await prisma.service.findUnique({
    where: { id: id },
  });
  return service;
};

const create = (service) => {
  const newService = prisma.service.create({
    data: {
      title: service.title,
      description: service.description,
    },
  });
  return newService;
};

const update = async (id, service) => {
  const updatedService = await prisma.service.update({
    where: { id: id },
    data: {
      title: service.title,
      description: service.description,
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

module.exports = { getAll, getById, create, update, deleteService };

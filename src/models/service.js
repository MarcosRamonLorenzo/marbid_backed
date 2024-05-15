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
  const {title,content,categoryId,image,price} = service
  const newService = prisma.service.create({
    data: {
      title,
      content,
      categoryId,
      image,
      price
    },
  });
  return newService;
};

const update = async (id, service) => {
  const {title,content,categoryId,image,price} = service
  const updatedService = await prisma.service.update({
    where: { id: id },
    data: {
      title,
      content,
      categoryId,
      image,
      price
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
  });
  return services;
}
const getAppliedServicesByUser = async (idUser) => {
  const services = await prisma.service.findMany({
    where: {
      authorAppliedId: idUser,
    },
  });
  return services;
}


module.exports = { getAll, getById, create, update, deleteService,getCreatedServicesByUser,getAppliedServicesByUser };

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  const services = await prisma.service.findMany({
    include: {
      authorCreated: true,
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
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
  const {title, content, category, image, price, authorCreated} = service
  const newService = prisma.service.create({
    data: {
      title,
      content,
      image,
      price,
      authorCreated: {
        connect: {
          id: authorCreated
        }
      },
      category: {
        connect: {
          id: category
        }
      }
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
    include: {
      authorCreated: true,
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return services;
};

const getAppliedServicesByUser = async (idUser) => {
  const services = await prisma.service.findMany({
    where: {
      authorAppliedId: idUser
    },
    include: {
      authorApplied: true,
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return services;
};


module.exports = { getAll, getById, create, update, deleteService,getCreatedServicesByUser,getAppliedServicesByUser };

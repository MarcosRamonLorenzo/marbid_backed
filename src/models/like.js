const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getLikesByService = async (serviceId) => {
  const likes = await prisma.like.count({
    where: { serviceId: serviceId },
  });
  return likes;
};

const getLikeByUserId = async (userId) => {
  const likes = await prisma.like.findMany({
    where: { userId },
    include:{
      service: true,
    }
  });
  return likes;
};

const create = async (like) => {
  const newLike = await prisma.like.create({
    data: {
      userId: like.userId,
      serviceId: like.serviceId,
    },
  });
  return newLike;
};

const deleteLike = async (id) => {
  const deletedLike = await prisma.like.delete({
    where: { id: id },
  });
  return deletedLike;
};

module.exports = {
  getLikesByService,
  getLikeByUserId,
  create,
  deleteLike,
};

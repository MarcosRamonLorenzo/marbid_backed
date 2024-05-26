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
      user:true,
    }
  });
  return likes;
};

const isServiceLikedByUser = async (userId, serviceId) => {
  const like = await prisma.like.findFirst({
    where: { userId, serviceId },
  });
  return like !== null;
};

const create = async (like) => {
  const newLike = await prisma.like.create({
    data: {
      user: {
        connect: {
          id: like.user,
        },
      },
      service: {
        connect: {
          id: like.service,
        },
      },
    },
  });
  return newLike;
};

const deleteLike = async (userId,serviceId ) => {
  const deletedLike = await prisma.like.delete({
    where: { 
      serviceId_userId: {
        userId ,
        serviceId, 
      }
    },
  });
  return deletedLike;
};
module.exports = {
  isServiceLikedByUser,
  getLikesByService,
  getLikeByUserId,
  create,
  deleteLike,
};

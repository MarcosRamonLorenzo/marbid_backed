const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCommentsByServiceId = async (serviceId) => {
  const comments = await prisma.comment.findMany({
    where: { serviceId: serviceId },
    include: {
      author: true,
    },
  });
  return comments;
};

const getCommentByUserId = async (userId) => {
  const comments = await prisma.comment.findMany({
    where: { authorId: userId },
    include: {
      service: true,
    },
  });
  return comments;
};

const create = async (comment) => {
  const newComment = await prisma.comment.create({
    data: {
      content: comment.content,
      authorId: comment.authorId,
      serviceId: comment.serviceId,
    },
    include: {
      author: true,
    },
  });
  return newComment;
};

const deleteComment = async (id) => {
  const deletedComment = await prisma.comment.delete({
    where: { id: id },
  });
  return deletedComment;
};

module.exports = {
  getCommentsByServiceId,
  getCommentByUserId,
  create,
  deleteComment,
};

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCommentsByServiceId = async (serviceId) => {
  const comments = await prisma.comment.findMany({
    where: { serviceId: parseInt(serviceId) },
  });
  return comments;
};

const getCommentByUserId = async (userId) => {
  const comments = await prisma.comment.findMany({
    where: { authorId: parseInt(userId) },
  });
  return comments;
};

const create = async (comment) => {
  const newComment = await prisma.comment.create({
    data: {
      content: comment.content,
      authorId: parseInt(comment.authorId),
      serviceId: parseInt(comment.serviceId),
    },
  });
  return newComment;
};

const deleteComment = async (id) => {
  const deletedComment = await prisma.comment.delete({
    where: { id: parseInt(id) },
  });
  return deletedComment;
};

module.exports = {
  getCommentsByServiceId,
  getCommentByUserId,
  create,
  deleteComment,
};

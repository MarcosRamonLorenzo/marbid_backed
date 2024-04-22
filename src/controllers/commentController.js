const Comment = require("@models/comment");
const { handleErr } = require("@errors/errorHandler.js");

const getCommentsByServiceId = async (serviceId) => {
  try {
    const comments = await Comment.getCommentsByServiceId(serviceId);
    return comments;
  } catch (error) {
    handleErr(error);
  }
};

const getCommentByUserId = async (userId) => {
  try {
    const comments = await Comment.getCommentByUserId(userId);
    return comments;
  } catch (error) {
    handleErr(error);
  }
};

const create = async (comment) => {
  try {
    const newComment = await Comment.create(comment);
    return newComment;
  } catch (error) {
    handleErr(error);
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await Comment.deleteComment(id);
    return deletedComment;
  } catch (error) {
    handleErr(error);
  }
};

module.exports = {
  getCommentsByServiceId,
  getCommentByUserId,
  create,
  deleteComment,
};

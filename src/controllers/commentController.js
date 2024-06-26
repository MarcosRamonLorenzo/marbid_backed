const Comment = require("@models/comment");
const { handleErr } = require("@errors/errorHandler.js");

const getCommentsByServiceId = async (req, res) => {
  try {
    const comments = await Comment.getCommentsByServiceId(req.params.serviceId);
    res.status(200).json({ status: "successful ", data: comments, error: null });
  } catch (error) {
    console.log(error);
    handleErr(error);
  }
};

const getCommentByUserId = async (req, res) => {
  try {
    const comments = await Comment.getCommentByUserId(req.params.userId);
    res.status(200).json({ status: "successful ", data: comments, error: null });
  } catch (error) {
    handleErr(error);
  }
};

const create = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(200).json({ status: "successful ", data: newComment, error: null });
  } catch (error) {
    handleErr(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.deleteComment(req.params.id);
    res.status(200).json({ status: "successful ", data: deleteComment, error: null });
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
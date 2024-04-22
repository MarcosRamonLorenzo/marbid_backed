const express = require("express");

const commentController = require("@controllers/commentController.js");

const router = express.Router();

router.get("/:serviceId", commentController.getCommentsByServiceId);

router.get("/user/:userId", commentController.getCommentByUserId);

router.post("/", commentController.create);

router.delete("/:id", commentController.deleteComment);

module.exports = router;

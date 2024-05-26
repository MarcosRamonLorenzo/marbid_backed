const express = require("express");
const likeController = require("@controllers/likeController")

const router = express.Router();

router.get("/service/:serviceId", likeController.getLikesByService);

router.get("/user/:userId", likeController.getLikeByUserId);

router.get("/isLiked/:userId/:serviceId", likeController.isServiceLikedByUser);

router.post("/", likeController.create);

router.delete("/:userId/:serviceId", likeController.deleteLike);

module.exports = router;

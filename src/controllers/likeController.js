const Like = require("@models/like");
const { handleErr } = require("@errors/errorHandler");

const getLikesByService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const likes = await Like.getLikesByService(serviceId);
    res.json(likes);
  } catch (error) {
    handleErr(error, req, res);  }
};

const getLikeByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const likes = await Like.getLikeByUserId(userId);
    res.json(likes);
  } catch (error) {
    handleErr(error, req, res);  }
};

const isServiceLikedByUser = async (req,res) =>{
  try {
    const {userId,serviceId} = req.params;
    const like = await Like.isServiceLikedByUser(userId,serviceId);
    res.json(like);
  } catch (error) {
    handleErr(error, req, res);  }
}

const create = async (req, res) => {
  try {
    const like = req.body;
    console.log(like);
    const newLike = await Like.create(like);
    res.json(newLike);
  } catch (error) {
    handleErr(error, req, res);  }
};

const deleteLike = async (req, res) => {
  try {
    const { userId , serviceId } = req.params;
    const deletedLike = await Like.deleteLike(userId,serviceId);
    res.json(deletedLike);
  } catch (error) {
    handleErr(error, req, res);
  };
}

module.exports = {
  getLikesByService,
  getLikeByUserId,
  isServiceLikedByUser,
  create,
  deleteLike,
}
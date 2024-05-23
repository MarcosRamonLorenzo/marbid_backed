const Like = require("@models/like");

const getLikesByService = async (req, res) => {
  const { serviceId } = req.params;
  const likes = await Like.getLikesByService(serviceId);
  res.json(likes);
};

const getLikeByUserId = async (req, res) => {
  const { userId } = req.params;
  const likes = await Like.getLikeByUserId(userId);
  res.json(likes);
};

const create = async (req, res) => {
  const like = req.body;
  const newLike = await Like.create(like);
  res.json(newLike);
};

const deleteLike = async (req, res) => {
  const { id } = req.params;
  const deletedLike = await Like.deleteLike(id);
  res.json(deletedLike);
};

module.exports = {
  getLikesByService,
  getLikeByUserId,
  create,
  deleteLike,
}

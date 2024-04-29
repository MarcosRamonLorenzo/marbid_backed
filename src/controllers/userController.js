const User = require("@models/user");
const { handleErr } = require("@errors/errorHandler");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();

    res.status(200).json({ status: "successful ", data: users, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const getUserById = async (req, res) => {
  try {
    
    const user = await User.getById(req.params.id);

    res.status(200).json({ status: "successful", data: user, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    const newUser = await User.create(user);
    res.status(201).json({ status: "successful", data: newUser, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const updateUser = async (req, res) => {
  const user = req.body;
  try {
    const updatedUser = await User.update(req.params.id, user);
    res
      .status(200)
      .json({ status: "successful", data: updatedUser, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteUser(req.params.id);
    res
      .status(200)
      .json({ status: "successful", data: deletedUser, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

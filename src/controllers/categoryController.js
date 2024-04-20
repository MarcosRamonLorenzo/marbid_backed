const Category = require("@models/category.js");
const { handleErr } = require("@errors/errorHandler.js");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();

    res
      .status(200)
      .json({ status: "successful ", data: categories, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.getById(req.params.id);

    res.status(200).json({ status: "successful", data: category, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const createCategory = async (req, res) => {
  const category = req.body;
  try {
    const newCategory = await Category.create(category);
    res
      .status(201)
      .json({ status: "successful", data: newCategory, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const updateCategory = async (req, res) => {
  const category = req.body;
  try {
    const updatedCategory = await Category.update(req.params.id, category);
    res
      .status(200)
      .json({ status: "successful", data: updatedCategory, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.deleteCategory(req.params.id);
    res
      .status(200)
      .json({ status: "successful", data: deletedCategory, error: null });
  } catch (error) {
    handleErr(error, req, res);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
};

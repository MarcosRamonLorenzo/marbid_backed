const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return categories;
};

const getById = async (id) => {
  const category = await prisma.category.findUnique({
    where: { id },
  });

  return category;
};

const create = async (category) => {
  const newCategory = await prisma.category.create({
    data: {
      name: category.name,
    },
  });

  return newCategory;
};

const update = async (id, category) => {
  const updatedCategory = await prisma.category.update({
    where: { id },
    data: {
      name: category.name,
    },
  });

  return updatedCategory;
};

const deleteCategory = async (id) => {
  const deletedCategory = await prisma.category.delete({
    where: { id },
  });

  return deletedCategory;
};

module.exports = { getAll, getById, create, update, deleteCategory };

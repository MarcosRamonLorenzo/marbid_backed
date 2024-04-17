import { PrismaClient } from "@prisma/client/extension";

const getAll = async () => {
  const categories = await prisma.category.findMany();

  return categories;
};

const getById = async (id) => {
  const category = await prisma.category.findUnique({
    where: { id: parseInt(id) },
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
    where: { id: parseInt(id) },
    data: {
      name: category.name,
    },
  });

  return updatedCategory;
};

const deleteCategory = async (id) => {
  const deletedCategory = await prisma.category.delete({
    where: { id: parseInt(id) },
  });

  return deletedCategory;
};

export default { getAll, getById, create, update, deleteCategory };

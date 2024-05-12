const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  return user;
};

const create = async (user) => {
  const {id, email,name,avatar_img} = user;
  const newUser = await prisma.user.create({
    data: {
      id,
      email,
      name,
      avatar_img
    },
  });
  return newUser;
};

const update = async (id, user) => {
  const { name, email, country, description, image, label,avatar_img,backround_img } = user;
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name,
      email,
      country,
      description,
      image,
      label,
      avatar_img,
      backround_img
    },
  });
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  return deletedUser;
};

module.exports = { getAll, getById, create, update, deleteUser };

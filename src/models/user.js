const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  return user;
};

const create = async (user) => {
  const { name, email, password, country, description, image, label } = user;
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
      country: country,
      description: description,
      image: image,
      label: label,
    },
  });
  return newUser;
};

const update = async (id, user) => {
  const { name, email, password, country, description, image, label } = user;
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: name,
      email: email,
      password: password,
      country: country,
      description: description,
      image: image,
      label: label,
    },
  });
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  return deletedUser;
};

module.exports = { getAll, getById, create, update, deleteUser };

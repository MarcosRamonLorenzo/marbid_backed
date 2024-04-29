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
  const {id, email,role} = user;
  const newUser = await prisma.user.create({
    data: {
      id,
      email,
      role,
    },
  });
  return newUser;
};

const update = async (id, user) => {
  const { name, email, country, description, image, label } = user;
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: name,
      email: email,
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
    where: { id: id },
  });
  return deletedUser;
};

module.exports = { getAll, getById, create, update, deleteUser };

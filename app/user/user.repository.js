const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  FetchUser: async () => {
    return await prisma.user.findMany();
  },
  FetchUserById: async (id) => {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  },
  CreateUser: async (payload) => {
    return await prisma.tbm_user.create({
      data: payload,
    });
  },
};

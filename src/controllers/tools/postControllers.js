const { Tool } = require("../../db");

const postToolController = async (data) => {
  const [tool, created] = await Tool.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });
  return created
    ? {
        status: 201,
        error: false,
        data: tool,
        message: "Registro de herramienta creado con exito",
      }
    : {
        status: 409,
        error: true,
        data: tool,
        message: "El registro ya existe",
      };
};

module.exports = {
  postToolController,
};

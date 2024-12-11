const { Tool } = require("../../db");

const postToolController = async (data) => {
  const [tool, created] = await Tool.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });
  if (created) {
    return {
      status: 201,
      error: false,
      data: tool,
      message: "Registro de herramienta creado con exito",
    };
  } else {
    return {
      status: 409,
      error: true,
      data: tool ? tool : null,
      message: "Error al crear o el registro ya existe",
    };
  }
};

module.exports = {
  postToolController,
};

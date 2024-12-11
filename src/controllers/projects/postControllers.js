const { Project } = require("../../db");

const postProjectController = async (data) => {
  const [project, created] = await Project.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });

  return created
    ? {
        status: 201,
        error: false,
        data: project,
        message: "Registro de proyecto creado con exito",
      }
    : {
        status: 409,
        error: true,
        data: project,
        message: "El registro ya existe",
      };
};

module.exports = {
  postProjectController,
};

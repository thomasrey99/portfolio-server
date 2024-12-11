const { Project } = require("../../db");

const postProjectController = async (data) => {
  const [project, created] = await Project.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });

  if (created) {
    return {
      status: 200,
      error: false,
      data: project,
      message: "Registro del proyecto creado con exito",
    };
  } else {
    return {
      status: 409,
      error: true,
      data: project ? project : null,
      message: "Error al crear o el registro ya existe",
    };
  }
};

module.exports = {
  postProjectController,
};

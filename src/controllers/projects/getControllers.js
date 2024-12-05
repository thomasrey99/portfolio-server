const { Project } = require("../../db");

const getAllProjectsController = async () => {
  try {
    const projects = await Project.findAll();
    return {
      status: 200,
      error: false,
      data: projects,
      message: "Registros de proyectos obtenidos con exito",
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

const getProjectByIdController = async (id) => {
  try {
    const project = await Project.findByPk(id);
    if (project) {
      return {
        status: 200,
        error: false,
        data: project,
        message: "Registro de proyecto obtenido con exito",
      };
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `El registro de proyecto con UUID ${id} no existe o fue destruido`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

module.exports = {
  getAllProjectsController,
  getProjectByIdController,
};

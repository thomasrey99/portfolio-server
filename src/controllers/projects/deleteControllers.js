const { Project } = require("../../db");

const deleteProjectController = async (id) => {
  try {
    const project = await Project.findByPk(id);
    if (project) {
      const deleteProject = await project.destroy();
      if (deleteProject) {
        return {
          status: 200,
          error: false,
          data: project,
          message: `Registro del proyecto ${project.name} eliminado con exito`,
        };
      } else {
        return {
          status: 400,
          error: true,
          data: null,
          message: `Error al eliminar el registro del proyecto con UUID ${id}`,
        };
      }
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `No se encontro registro del proyecto con UUID ${id}`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: `Error interno del servidor, no se ha podido eliminar el registro con UUID ${id}`,
    };
  }
};

module.exports = {
  deleteProjectController,
};

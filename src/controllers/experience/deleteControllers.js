const { Experience } = require("../../db");

const deleteExperienceController = async (id) => {
  try {
    const experience = await Experience.findByPk(id);
    if (experience) {
      const deleteExperience = await experience.destroy();
      if (deleteExperience) {
        return {
          status: 200,
          error: false,
          data: experience,
          message: `Registro de experiencia en ${experience.name} eliminado con exito`,
        };
      } else {
        return {
          status: 400,
          error: true,
          data: null,
          message: `Error al eliminar el registro de experiencia con UUID ${id}`,
        };
      }
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `No se encontro registro de experiencia con UUID ${id}`,
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
  deleteExperienceController,
};

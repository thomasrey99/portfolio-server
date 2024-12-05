const { Experience } = require("../../db");

const getAllExperiencesController = async () => {
  try {
    const experience = await Experience.findAll();
    return {
      status: 200,
      error: false,
      data: experience,
      message: "Registros de experiencias laborales obtenidos con exito",
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

const getExperienceByIdController = async (id) => {
  try {
    const experience = await Experience.findByPk(id);
    if (experience) {
      return {
        status: 200,
        error: false,
        data: experience,
        message: "Registro de la experiencia laboral obtenido con exito",
      };
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `El registro de experiencia laboral con UUID ${id} no existe o fue destruido`,
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
  getAllExperiencesController,
  getExperienceByIdController,
};

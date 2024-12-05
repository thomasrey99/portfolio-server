const { Skill } = require("../../db");

const getAllSkillsController = async () => {
  try {
    const skills = await Skill.findAll();
    return {
      status: 200,
      error: false,
      data: skills,
      message: "Registros de habilidades obtenidas con exito",
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

const getSkillByIdController = async (id) => {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      return {
        status: 200,
        error: false,
        data: skill,
        message: "Registro de habilidad obtenido con exito",
      };
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `El registro de habilidad con UUID ${id} no existe o fue destruido`,
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
  getAllSkillsController,
  getSkillByIdController,
};

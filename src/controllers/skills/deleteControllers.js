const { Skill } = require("../../db");

const deleteSkillController = async (id) => {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      const deleteSkill = await skill.destroy();
      if (deleteSkill) {
        return {
          status: 200,
          error: false,
          data: skill,
          message: `Registro de la habilidad ${skill.name} eliminado con exito`,
        };
      } else {
        return {
          status: 400,
          error: true,
          data: null,
          message: `Error al eliminar el registro de la habilidad con UUID ${id}`,
        };
      }
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `No se encontro registro de la habilidad con UUID ${id}`,
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
  deleteSkillController,
};

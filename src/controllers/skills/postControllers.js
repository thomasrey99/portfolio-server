const { Skill } = require("../../db");

const postSkillController = async (data) => {
  const [skill, created] = await Skill.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });
  if (created) {
    return {
      status: 201,
      error: false,
      data: skill,
      message: "Registro de habilidad creado con exito",
    };
  } else {
    return {
      status: 409,
      error: true,
      data: skill ? skill : null,
      message: "Error al crear o el registro ya existe",
    };
  }
};

module.exports = {
  postSkillController,
};

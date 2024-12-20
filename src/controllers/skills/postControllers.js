const { Skill } = require("../../db");

const postSkillController = async (data) => {
  const [skill, created] = await Skill.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });
  return created
    ? {
        status: 201,
        error: false,
        data: skill,
        message: "Registro de habilidad creado con exito",
      }
    : {
        status: 409,
        error: true,
        data: skill,
        message: "El registro ya existe",
      };
};

module.exports = {
  postSkillController,
};

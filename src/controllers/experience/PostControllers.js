const { Experience } = require("../../db");

const postExperienceController = async (data) => {
  const [experience, created] = await Experience.findOrCreate({
    where: {
      name: data.name,
      company: data.company,
    },
    defaults: data,
  });

  return created
    ? {
        status: 201,
        error: false,
        data: experience,
        message: "Registro de experiencia creado con exito",
      }
    : {
        status: 409,
        error: true,
        data: experience,
        message: "El registro ya existe",
      };
};

module.exports = {
  postExperienceController,
};

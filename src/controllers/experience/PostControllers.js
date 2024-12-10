const { Experience } = require("../../db");

const postExperienceController = async (data) => {
  const [experience, created] = await Experience.findOrCreate({
    where: {
      name: data.name,
      company: data.company,
    },
    defaults: data,
  });

  if (created) {
    return {
      status: 200,
      error: false,
      data: experience,
      message: "Registro de experiencia creado con exito",
    };
  } else {
    return {
      status: 409,
      error: true,
      data: experience ? experience : null,
      message: "Error al crear o el registro ya existe",
    };
  }
};

module.exports = {
  postExperienceController,
};

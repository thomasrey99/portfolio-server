const { Skill } = require("../../db");

const patchSkillController = async (id, data) => {
  const [updatedCount, updatedRows] = await Skill.update(data, {
    where: { id },
    returning: true,
  });
  return updatedCount > 0
    ? {
        status: 200,
        error: false,
        data: updatedRows,
        message: "Cambios realizados con exito",
      }
    : {
        status: 404,
        error: true,
        data: null,
        message: "No se realizaron cambios",
      };
};

module.exports = {
  patchSkillController,
};

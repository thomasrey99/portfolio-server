const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  patchSkillController,
} = require("../../controllers/skills/patchControllers");

const patchSkillHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = req.body;

    if (isUUID(id)) {
      if (data) {
        const updateSkill = await patchSkillController(id, data);
        if (updateSkill) {
          const response = await createResponse({
            status: "success",
            message: "Registro de habilidad actualizado con exito!",
            data: updateSkill,
            error: false,
          });
          return res.status(200).json(response);
        } else {
          const response = await createResponse({
            status: "error",
            message: "Registro no actualizado",
            data: null,
            error: true,
          });
          return res.status(400).json(response);
        }
      } else {
        const response = await createResponse({
          status: "error",
          message: "Datos no proporcionados",
          data: null,
          error: true,
        });
        return res.status(200).json(response);
      }
    } else {
      const response = await createResponse({
        status: "error",
        message: `UUID ${id} no valido`,
        data: null,
        error: true,
      });

      return res.status(400).json(response);
    }
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al actualizar la habilidad",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  patchSkillHandler,
};

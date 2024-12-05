const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  patchToolController,
} = require("../../controllers/tools/patchControllers");

const patchToolHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = req.body;

    if (isUUID(id)) {
      if (data) {
        const updateTool = await patchToolController(id, data);
        if (updateTool) {
          const response = await createResponse({
            status: "success",
            message: "Registro de herramienta actualizado con exito!",
            data: updateTool,
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
  patchToolHandler,
};

const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  patchProjectController,
} = require("../../controllers/projects/patchControllers");

const patchProjectHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = req.body;

    if (isUUID(id)) {
      if (data) {
        const updateProject = await patchProjectController(id, data);
        if (updateProject) {
          const response = await createResponse({
            status: "success",
            message: "Registro de proyecto actualizado con exito!",
            data: updateProject,
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
      message: "Error al actualizar el proyecto",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  patchProjectHandler,
};

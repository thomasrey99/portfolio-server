const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  deleteCertificationController,
} = require("../../controllers/certifications/deleteControllers");

const deleteCertificationHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (isUUID(id)) {
      const deleteCertification = await deleteCertificationController(id);
      if (deleteCertification) {
        const response = await createResponse({
          status: "success",
          message: "Registro de la certificacion eliminado con exito",
          data: deleteCertification,
          error: false,
        });

        return res.status(200).json(response);
      } else {
        const response = await createResponse({
          status: "error",
          message: "Error al eliminar registro de la certificacion",
          data: null,
          error: true,
        });

        return res.status(400).json(response);
      }
    } else {
      const response = await createResponse({
        status: "error",
        message: "Error al eliminar registro",
        data: null,
        error: `Registro con ${id} no encontrado`,
      });

      return res.status(400).json(response);
    }
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al eliminar registro de la certificacion",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  deleteCertificationHandler,
};

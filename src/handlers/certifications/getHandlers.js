const { isUUID } = require("validator");
const {
  getAllCertificationsController,
  getCertificationByIdController,
} = require("../../controllers/certifications/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllCertificationsHandler = async (req, res) => {
  try {
    const certifications = await getAllCertificationsController();
    const response = await createResponse({
      status: "success",
      message: "Registros de certificaciones obtenidos con exito",
      data: certifications,
      error: false,
    });

    return res.status(200).json(response);
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al cargar registro de certificaciones",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

const getCertificationsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const certification = await getCertificationByIdController(id);
    if (certification) {
      const response = await createResponse({
        status: "success",
        message: "Registros de la certificacion obtenidos con exito",
        data: certification,
        error: false,
      });
      return res.status(200).json(response);
    } else {
      const response = await createResponse({
        status: "error",
        message: "Error al cargar registro de la certificacion",
        data: null,
        error: `Registro con ${id} no encontrado`,
      });
      return res.status(400).json(response);
    }
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al cargar registro de la certificacion",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  getAllCertificationsHandler,
  getCertificationsByIdHandler,
};

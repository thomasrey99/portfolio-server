const { Certification } = require("../../db");

const getAllCertificationsController = async () => {
  try {
    const certifications = await Certification.findAll();
    return {
      status: 200,
      error: false,
      data: certifications,
      message: "Registros de certificaciones obtenidos con exito",
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

const getCertificationByIdController = async (id) => {
  try {
    const certification = await Certification.findByPk(id);
    if (certification) {
      return {
        status: 200,
        error: false,
        data: certification,
        message: "Registro de la certificacion obtenido con exito",
      };
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `El registro de certificacion con UUID ${id} no existe o fue destruido`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

module.exports = {
  getAllCertificationsController,
  getCertificationByIdController,
};

const {
  postCertificationController,
} = require("../../controllers/certifications/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postCertificationsHandler = async (req, res) => {
  try {
    const response = await createResponse({
      status: "error",
      message: "Error al crear el registro de certificacion",
      data: null,
      error: null,
    });

    return res.status(400).json(response);
  } catch (error) {
    const response = await createResponse({
      status: "error",
      message: "Error al crear el registro de certificacion",
      data: null,
      error: error.message,
    });

    return res.status(400).json(response);
  }
};

module.exports = {
  postCertificationsHandler,
};

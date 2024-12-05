const {
  getAllCertificationsController,
  getCertificationByIdController,
} = require("../../controllers/certifications/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllCertificationsHandler = async (req, res) => {
  try {
    const { status, error, data, message } = await getAllCertificationsController();
    const response = await createResponse({
      status: error ? "fail" : "success",
      message: message,
      data: data,
      error: error,
    });
    return res.status(status).json(response);
  } catch (error) {
    const response = await createResponse({
      status: "fail",
      message: error.message,
      data: null,
      error: true,
    });
    return res.status(500).json(response);
  }
};

const getCertificationsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } =
      await getCertificationByIdController(id);
    const response = await createResponse({
      status: error ? "fail" : "success",
      message: message,
      data: data,
      error: error,
    });
    return res.status(status).json(response);
  } catch (error) {
    const response = await createResponse({
      status: "fail",
      message: error.message,
      data: null,
      error: true,
    });
    return res.status(500).json(response);
  }
};

module.exports = {
  getAllCertificationsHandler,
  getCertificationsByIdHandler,
};

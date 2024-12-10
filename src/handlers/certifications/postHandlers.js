const {
  postCertificationController,
} = require("../../controllers/certifications/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postCertificationsHandler = async (req, res) => {
  try {
    const certification = req.body;
    const { status, error, data, message } = await postCertificationController(
      certification
    );
    const response = createResponse({
      status: error ? "fail" : "success",
      message: message,
      data: data,
      error: error,
    });
    return res.status(status).json(response);
  } catch (error) {
    const response = createResponse({
      status: "fail",
      message: error.message,
      data: null,
      error: true,
    });

    return res.status(500).json(response);
  }
};

module.exports = {
  postCertificationsHandler,
};

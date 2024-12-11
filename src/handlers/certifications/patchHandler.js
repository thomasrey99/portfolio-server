const {
  patchCertificationController,
} = require("../../controllers/certifications/patchControllers");
const { createResponse } = require("../../utils/createResponse");

const patchCertificationHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const certification = req.body;
    const { status, error, data, message } = await patchCertificationController(
      id,
      certification
    );
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
  patchCertificationHandler,
};

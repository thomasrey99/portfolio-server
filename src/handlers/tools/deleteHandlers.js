const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  deleteToolController,
} = require("../../controllers/tools/deleteControllers");

const deleteToolHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } = await deleteToolController(id);
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
  deleteToolHandler,
};

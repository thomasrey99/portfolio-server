const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  patchToolController,
} = require("../../controllers/tools/patchControllers");

const patchToolHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const tool = req.body;
    const { status, error, data, message } = await patchToolController(
      id,
      tool
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
  patchToolHandler,
};

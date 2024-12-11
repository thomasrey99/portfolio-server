const {
  postToolController,
} = require("../../controllers/tools/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postToolHandler = async (req, res) => {
  try {
    const tool = req.body;
    const { status, error, data, message } = await postToolController(tool);
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
  postToolHandler,
};

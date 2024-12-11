const {
  postProjectController,
} = require("../../controllers/projects/postControllers");
const { createResponse } = require("../../utils/createResponse");

const postProjectsHandler = async (req, res) => {
  try {
    const project = req.body;
    const { status, error, data, message } = await postProjectController(
      project
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
  postProjectsHandler,
};

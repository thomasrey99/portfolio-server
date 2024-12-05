const { isUUID } = require("validator");
const {
  getAllProjectsController,
  getProjectByIdController,
} = require("../../controllers/projects/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllProjectsHandler = async (req, res) => {
  try {
    const { status, error, data, message } = await getAllProjectsController();
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

const getProjectsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } = await getProjectByIdController(id);
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
  getAllProjectsHandler,
  getProjectsByIdHandler,
};

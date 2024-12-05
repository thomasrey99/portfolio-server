const { isUUID } = require("validator");
const {
  getAllSkillsController,
  getSkillByIdController,
} = require("../../controllers/skills/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllSkillsHandler = async (req, res) => {
  try {
    const { status, error, data, message } = await getAllSkillsController();
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

const getSkillByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } = await getSkillByIdController(id);
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
  getAllSkillsHandler,
  getSkillByIdHandler,
};

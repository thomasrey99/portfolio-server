const {
  getAllExperiencesController,
  getExperienceByIdController,
} = require("../../controllers/experience/getControllers");
const { createResponse } = require("../../utils/createResponse");

const getAllExperienceHandler = async (req, res) => {
  try {
    const { status, error, data, message } = await getAllExperiencesController();
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

const getExperienceByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } = await getExperienceByIdController(
      id
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
  getAllExperienceHandler,
  getExperienceByIdHandler,
};

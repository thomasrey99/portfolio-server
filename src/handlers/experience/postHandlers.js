const {
  postExperienceController,
} = require("../../controllers/experience/PostControllers");
const { createResponse } = require("../../utils/createResponse");

const postExperienceHandler = async (req, res) => {
  try {
    const experience = req.body;
    const { status, error, data, message } = await postExperienceController(
      experience
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
  postExperienceHandler,
};

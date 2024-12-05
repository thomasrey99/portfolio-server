const { createResponse } = require("../../utils/createResponse");
const {
  deleteSkillController,
} = require("../../controllers/skills/deleteControllers");

const deleteSkillHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, error, data, message } = await deleteSkillController(id);
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
  deleteSkillHandler,
};

const { isUUID } = require("validator");
const { createResponse } = require("../../utils/createResponse");
const {
  patchSkillController,
} = require("../../controllers/skills/patchControllers");

const patchSkillHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = req.body;
    const { status, error, data, message } = await patchSkillController(
      id,
      skill
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
  patchSkillHandler,
};

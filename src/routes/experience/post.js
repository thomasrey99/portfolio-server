const { Router } = require("express");
const {
  postExperienceHandler,
} = require("../../handlers/experience/postHandlers");

const postExperienceRouter = Router();

postExperienceRouter.post("/", postExperienceHandler);

module.exports = postExperienceRouter;

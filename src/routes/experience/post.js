const { Router } = require("express");
const {
  postExperienceHandler,
} = require("../../handlers/experience/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const postExperienceRouter = Router();

postExperienceRouter.post("/", dataMiddlewareValidator, postExperienceHandler);

module.exports = postExperienceRouter;

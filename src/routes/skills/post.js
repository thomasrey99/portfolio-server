const { Router } = require("express");
const { postSkillHandler } = require("../../handlers/skills/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const postSkillsRouter = Router();

postSkillsRouter.post("/", dataMiddlewareValidator, postSkillHandler);

module.exports = postSkillsRouter;

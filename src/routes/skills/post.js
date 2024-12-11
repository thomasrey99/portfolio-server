const { Router } = require("express");
const { postSkillHandler } = require("../../handlers/skills/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
const schemas = [
  {
    field: "name",
    required: true,
    type: "string",
  },
  {
    field: "image",
    required: true,
    type: "string",
  },
];

const postSkillsRouter = Router();

postSkillsRouter.post("/", dataMiddlewareValidator(schemas, true), postSkillHandler);

module.exports = postSkillsRouter;

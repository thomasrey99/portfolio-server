const { Router } = require("express");
const { patchSkillHandler } = require("../../handlers/skills/patchHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");
const schemas = [
  {
    field: "name",
    required: false,
    type: "string",
  },
  {
    field: "image",
    required: false,
    type: "string",
  },
];

const patchSkillRouter = Router();

patchSkillRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator(schemas, false),patchSkillHandler);

module.exports = patchSkillRouter;

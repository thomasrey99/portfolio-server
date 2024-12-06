const { Router } = require("express");
const { patchSkillHandler } = require("../../handlers/skills/patchHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const patchSkillRouter = Router();

patchSkillRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator, patchSkillHandler);

module.exports = patchSkillRouter;

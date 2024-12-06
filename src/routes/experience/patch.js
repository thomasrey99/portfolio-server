const { Router } = require("express");
const {
  patchExperienceHandler,
} = require("../../handlers/experience/patchHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const patchExperienceRouter = Router();

patchExperienceRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator, patchExperienceHandler);

module.exports = patchExperienceRouter;

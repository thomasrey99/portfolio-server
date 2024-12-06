const { Router } = require("express");
const {
  patchProjectHandler,
} = require("../../handlers/projects/patchHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const patchProjectRouter = Router();

patchProjectRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator, patchProjectHandler);

module.exports = patchProjectRouter;

const { Router } = require("express");
const { patchToolHandler } = require("../../handlers/tools/patchHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const patchToolRouter = Router();

patchToolRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator, patchToolHandler);

module.exports = patchToolRouter;

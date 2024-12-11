const { Router } = require("express");
const { patchToolHandler } = require("../../handlers/tools/patchHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
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

const patchToolRouter = Router();

patchToolRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator(schemas, false), patchToolHandler);

module.exports = patchToolRouter;

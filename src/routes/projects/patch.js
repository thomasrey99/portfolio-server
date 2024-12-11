const { Router } = require("express");
const {
  patchProjectHandler,
} = require("../../handlers/projects/patchHandlers");
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
  {
    field: "description",
    required: false,
    type: "string",
  },
  {
    field: "url",
    required: false,
    type: "string",
  }
];
const patchProjectRouter = Router();

patchProjectRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator(schemas, false), patchProjectHandler);

module.exports = patchProjectRouter;

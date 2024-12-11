const { Router } = require("express");
const {
  patchExperienceHandler,
} = require("../../handlers/experience/patchHandlers");
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
  {
    field: "company",
    required: false,
    type: "string",
  },
  {
    field: "year_start",
    required: false,
    type: "string",
  },
  {
    field: "year_end",
    required: false,
    type: "string",
  },
  {
    field: "description",
    required: false,
    type: "string",
  },
];

const patchExperienceRouter = Router();

patchExperienceRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator(schemas, false), patchExperienceHandler);

module.exports = patchExperienceRouter;

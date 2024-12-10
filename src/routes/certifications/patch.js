const { Router } = require("express");
const {
  patchCertificationHandler,
} = require("../../handlers/certifications/patchHandler");
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
    field: "institution",
    required: false,
    type: "string",
  },
  {
    field: "year",
    required: false,
    type: "string",
  },
  {
    field: "description",
    required: false,
    type: "string",
  },
];
const patchCertificationsRouter = Router();

patchCertificationsRouter.patch(
  "/:id",
  UUIDValidatorMiddleware,
  dataMiddlewareValidator(schemas, false),
  patchCertificationHandler
);

module.exports = patchCertificationsRouter;

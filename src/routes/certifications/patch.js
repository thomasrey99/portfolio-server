const { Router } = require("express");
const {
  patchCertificationHandler,
} = require("../../handlers/certifications/patchHandler");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const patchCertificationsRouter = Router();

patchCertificationsRouter.patch("/:id", UUIDValidatorMiddleware, dataMiddlewareValidator, patchCertificationHandler);

module.exports = patchCertificationsRouter;

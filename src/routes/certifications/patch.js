const { Router } = require("express");
const {
  patchCertificationHandler,
} = require("../../handlers/certifications/patchHandler");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const patchCertificationsRouter = Router();

patchCertificationsRouter.patch("/:id", UUIDValidatorMiddleware, patchCertificationHandler);

module.exports = patchCertificationsRouter;

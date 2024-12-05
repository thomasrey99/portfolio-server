const { Router } = require("express");
const {
  getAllCertificationsHandler,
  getCertificationsByIdHandler,
} = require("../../handlers/certifications/getHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const getCertificationsRouter = Router();

getCertificationsRouter.get("/", getAllCertificationsHandler);
getCertificationsRouter.get("/:id", UUIDValidatorMiddleware, getCertificationsByIdHandler);

module.exports = getCertificationsRouter;

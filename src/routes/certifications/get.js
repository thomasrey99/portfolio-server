const { Router } = require("express");
const {
  getAllCertificationsHandler,
  getCertificationsByIdHandler,
} = require("../../handlers/certifications/getHandlers");

const getCertificationsRouter = Router();

getCertificationsRouter.get("/", getAllCertificationsHandler);
getCertificationsRouter.get("/:id", getCertificationsByIdHandler);

module.exports = getCertificationsRouter;

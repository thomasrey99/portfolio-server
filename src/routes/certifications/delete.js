const { Router } = require("express");
const {
  deleteCertificationHandler,
} = require("../../handlers/certifications/deleteHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const deleteCertificationsRouter = Router();

deleteCertificationsRouter.delete("/:id", UUIDValidatorMiddleware, deleteCertificationHandler);

module.exports = deleteCertificationsRouter;

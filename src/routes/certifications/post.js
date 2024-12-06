const { Router } = require("express");
const {
  postCertificationsHandler,
} = require("../../handlers/certifications/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const postCertificationsRouter = Router();

postCertificationsRouter.post("/", dataMiddlewareValidator, postCertificationsHandler);

module.exports = postCertificationsRouter;

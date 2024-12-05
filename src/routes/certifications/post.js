const { Router } = require("express");
const {
  postCertificationsHandler,
} = require("../../handlers/certifications/postHandlers");

const postCertificationsRouter = Router();

postCertificationsRouter.post("/", postCertificationsHandler);

module.exports = postCertificationsRouter;

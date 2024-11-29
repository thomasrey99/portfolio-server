const {Router}=require("express");
const { putCertificationHandler } = require("../../handlers/certifications/putHandler");


const putCertificationsRouter=Router();

putCertificationsRouter.patch("/:id", putCertificationHandler)

module.exports = putCertificationsRouter;
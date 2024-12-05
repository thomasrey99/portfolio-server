const {Router}=require("express");
const { pathCertificationHandler } = require("../../handlers/certifications/pathHandler");


const pathCertificationsRouter=Router();

pathCertificationsRouter.patch("/:id", pathCertificationHandler)

module.exports = pathCertificationsRouter;
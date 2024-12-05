const {Router}=require("express");
const { patchCertificationHandler } = require("../../handlers/certifications/patchHandler");


const patchCertificationsRouter=Router();

patchCertificationsRouter.patch("/:id", patchCertificationHandler)

module.exports = patchCertificationsRouter;
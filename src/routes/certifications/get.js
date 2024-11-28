const {Router}=require("express");
const { getAllCertificationsHandler } = require("../../handlers/certifications/getHandlers");


const getCertificationsRouter=Router();

getCertificationsRouter.get("/", getAllCertificationsHandler);

module.exports = getCertificationsRouter;
const {Router}=require("express");
const { deleteCertificationHandler } = require("../../handlers/certifications/deleteHandlers");


const deleteCertificationsRouter=Router();

deleteCertificationsRouter.delete("/:id", deleteCertificationHandler)

module.exports = deleteCertificationsRouter;
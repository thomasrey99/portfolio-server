const {Router}=require("express");
const getCertificationsRouter = require("./get");
const postCertificationsRouter = require("./post");
const pathCertificationsRouter = require("./path");


const  mainCertificationsRouter=Router();

mainCertificationsRouter.use("/certifications", getCertificationsRouter);
mainCertificationsRouter.use("/certifications", postCertificationsRouter);
mainCertificationsRouter.use("/certifications", pathCertificationsRouter);

module.exports = mainCertificationsRouter;
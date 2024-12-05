const {Router}=require("express");
const getCertificationsRouter = require("./get");
const postCertificationsRouter = require("./post");
const patchCertificationsRouter = require("./patch");


const  mainCertificationsRouter=Router();

mainCertificationsRouter.use("/certifications", getCertificationsRouter);
mainCertificationsRouter.use("/certifications", postCertificationsRouter);
mainCertificationsRouter.use("/certifications", patchCertificationsRouter);

module.exports = mainCertificationsRouter;
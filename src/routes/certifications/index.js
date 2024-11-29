const {Router}=require("express");
const getCertificationsRouter = require("./get");
const postCertificationsRouter = require("./post");
const putCertificationsRouter = require("./put");


const  mainCertificationsRouter=Router();

mainCertificationsRouter.use("/certifications", getCertificationsRouter);
mainCertificationsRouter.use("/certifications", postCertificationsRouter);
mainCertificationsRouter.use("/certifications", putCertificationsRouter);

module.exports = mainCertificationsRouter;
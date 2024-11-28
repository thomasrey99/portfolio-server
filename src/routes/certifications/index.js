const {Router}=require("express");
const getCertificationsRouter = require("./get");
const postCertificationsRouter = require("./post");


const  mainCertificationsRouter=Router();

mainCertificationsRouter.use("/certifications", getCertificationsRouter);
mainCertificationsRouter.use("/certifications", postCertificationsRouter);

module.exports = mainCertificationsRouter;
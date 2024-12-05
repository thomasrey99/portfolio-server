const { Router } = require("express");
const getCertificationsRouter = require("./get");
const postCertificationsRouter = require("./post");
const patchCertificationsRouter = require("./patch");
const deleteCertificationsRouter = require("./delete");

const mainCertificationsRouter = Router();

mainCertificationsRouter.use("/certifications", getCertificationsRouter);
mainCertificationsRouter.use("/certifications", postCertificationsRouter);
mainCertificationsRouter.use("/certifications", patchCertificationsRouter);
mainCertificationsRouter.use("/certifications", deleteCertificationsRouter);

module.exports = mainCertificationsRouter;

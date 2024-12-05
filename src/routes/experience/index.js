const { Router } = require("express");
const getExperienceRouter = require("./get");
const postExperienceRouter = require("./post");
const patchExperienceRouter = require("./patch");
const deleteExperienceRouter = require("./delete");

const mainExperienceRouter = Router();

mainExperienceRouter.use("/experience", getExperienceRouter);
mainExperienceRouter.use("/experience", postExperienceRouter);
mainExperienceRouter.use("/experience", patchExperienceRouter);
mainExperienceRouter.use("/experience", deleteExperienceRouter);
module.exports = mainExperienceRouter;

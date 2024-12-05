const {Router}=require("express");

const getSkillsRouter = require("./get");
const postSkillsRouter = require("./post");
const patchSkillRouter = require("./patch");

const  mainSkillsRouter=Router();

mainSkillsRouter.use("/skills", getSkillsRouter);
mainSkillsRouter.use("/skills", postSkillsRouter);
mainSkillsRouter.use("/skills", patchSkillRouter);

module.exports = mainSkillsRouter;
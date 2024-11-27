const {Router}=require("express");

const getSkillsRouter = require("./get");
const postSkillsRouter = require("./post");

const  mainSkillsRouter=Router();

mainSkillsRouter.use("/skills", getSkillsRouter);
mainSkillsRouter.use("/skills", postSkillsRouter);

module.exports = mainSkillsRouter;
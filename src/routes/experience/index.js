const {Router}=require("express");
const getExperienceRouter = require("./get");
const postExperienceRouter = require("./post");


const  mainExperienceRouter=Router();

mainExperienceRouter.use("/experience", getExperienceRouter);
mainExperienceRouter.use("/experience", postExperienceRouter);

module.exports = mainExperienceRouter;
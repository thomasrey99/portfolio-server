const {Router}=require("express");
const { getAllExperienceHandler } = require("../../handlers/experience/getHandlers");


const getExperienceRouter=Router();

getExperienceRouter.get("/", getAllExperienceHandler);

module.exports = getExperienceRouter;
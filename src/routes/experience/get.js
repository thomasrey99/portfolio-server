const {Router}=require("express");
const { getAllExperienceHandler, getExperienceByIdHandler } = require("../../handlers/experience/getHandlers");


const getExperienceRouter=Router();

getExperienceRouter.get("/", getAllExperienceHandler);
getExperienceRouter.get("/:id", getExperienceByIdHandler);

module.exports = getExperienceRouter;
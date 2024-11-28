const {Router}=require("express");
const { getAllProjectsHandler } = require("../../handlers/projects/getHandlers");

const getProjectsRouter=Router();

getProjectsRouter.get("/", getAllProjectsHandler);

module.exports = getProjectsRouter;
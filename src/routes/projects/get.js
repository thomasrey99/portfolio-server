const {Router}=require("express");
const { getAllProjectsHandler, getProjectsByIdHandler } = require("../../handlers/projects/getHandlers");

const getProjectsRouter=Router();

getProjectsRouter.get("/", getAllProjectsHandler);
getProjectsRouter.get("/:id", getProjectsByIdHandler);

module.exports = getProjectsRouter;
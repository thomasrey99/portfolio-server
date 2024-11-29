const {Router}=require("express");
const { getAllToolsHandler, getToolByIdHandler } = require("../../handlers/tools/getHandlers");

const getToolsRouter=Router();

getToolsRouter.get("/", getAllToolsHandler);
getToolsRouter.get("/:id", getToolByIdHandler);

module.exports = getToolsRouter;
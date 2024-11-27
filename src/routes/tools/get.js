const {Router}=require("express");
const { getAllToolsHandler } = require("../../handlers/tools/getHandlers");

const getToolsRouter=Router();

getToolsRouter.get("/", getAllToolsHandler);

module.exports = getToolsRouter;
const {Router}=require("express");
const getToolsRouter = require("./get");
const postToolsRouter = require("./post");

const mainToolsRouter=Router();

mainToolsRouter.use("/tools", getToolsRouter);
mainToolsRouter.use("/tools", postToolsRouter);

module.exports = mainToolsRouter;
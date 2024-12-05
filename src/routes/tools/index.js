const { Router } = require("express");
const getToolsRouter = require("./get");
const postToolsRouter = require("./post");
const patchToolRouter = require("./patch");
const deleteToolRouter = require("./delete");

const mainToolsRouter = Router();

mainToolsRouter.use("/tools", getToolsRouter);
mainToolsRouter.use("/tools", postToolsRouter);
mainToolsRouter.use("/tools", patchToolRouter);
mainToolsRouter.use("/tools", deleteToolRouter);

module.exports = mainToolsRouter;

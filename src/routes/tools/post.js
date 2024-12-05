const { Router } = require("express");
const { postToolHandler } = require("../../handlers/tools/postHandlers");

const postToolsRouter = Router();

postToolsRouter.post("/", postToolHandler);

module.exports = postToolsRouter;

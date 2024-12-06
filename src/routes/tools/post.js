const { Router } = require("express");
const { postToolHandler } = require("../../handlers/tools/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const postToolsRouter = Router();

postToolsRouter.post("/", dataMiddlewareValidator, postToolHandler);

module.exports = postToolsRouter;

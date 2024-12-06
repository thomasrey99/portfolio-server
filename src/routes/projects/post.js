const { Router } = require("express");
const { postProjectsHandler } = require("../../handlers/projects/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");

const postProjectsRouter = Router();

postProjectsRouter.post("/", dataMiddlewareValidator, postProjectsHandler);

module.exports = postProjectsRouter;

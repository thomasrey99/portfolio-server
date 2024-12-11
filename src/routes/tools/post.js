const { Router } = require("express");
const { postToolHandler } = require("../../handlers/tools/postHandlers");
const dataMiddlewareValidator = require("../../utils/middlewares/dataMiddleware");
const schemas = [
  {
    field: "name",
    required: true,
    type: "string",
  },
  {
    field: "image",
    required: true,
    type: "string",
  },
];
const postToolsRouter = Router();

postToolsRouter.post("/", dataMiddlewareValidator(schemas, true), postToolHandler);

module.exports = postToolsRouter;

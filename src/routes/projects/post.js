const { Router } = require("express");
const { postProjectsHandler } = require("../../handlers/projects/postHandlers");
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
  {
    field: "description",
    required: false,
    type: "string",
  },
  {
    field: "url",
    required: false,
    type: "string",
  }
];

const postProjectsRouter = Router();

postProjectsRouter.post("/", dataMiddlewareValidator(schemas, true), postProjectsHandler);

module.exports = postProjectsRouter;

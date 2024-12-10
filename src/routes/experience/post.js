const { Router } = require("express");
const {
  postExperienceHandler,
} = require("../../handlers/experience/postHandlers");
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
    field: "company",
    required: true,
    type: "string",
  },
  {
    field: "year_start",
    required: true,
    type: "string",
  },
  {
    field: "year_end",
    required: false,
    type: "string",
  },
  {
    field: "description",
    required: false,
    type: "string",
  },
];

const postExperienceRouter = Router();

postExperienceRouter.post("/", dataMiddlewareValidator(schemas, true), postExperienceHandler);

module.exports = postExperienceRouter;

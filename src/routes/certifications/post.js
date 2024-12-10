const { Router } = require("express");
const {
  postCertificationsHandler,
} = require("../../handlers/certifications/postHandlers");
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
    field: "institution",
    required: true,
    type: "string",
  },
  {
    field: "year",
    required: true,
    type: "string",
  },
  {
    field: "description",
    required: false,
    type: "string",
  },
];

const postCertificationsRouter = Router();

postCertificationsRouter.post("/", dataMiddlewareValidator(schemas, true), postCertificationsHandler);

module.exports = postCertificationsRouter;

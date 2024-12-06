const { Router } = require("express");
const {
  getAllProjectsHandler,
  getProjectsByIdHandler,
} = require("../../handlers/projects/getHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const getProjectsRouter = Router();

getProjectsRouter.get("/", getAllProjectsHandler);
getProjectsRouter.get("/:id", UUIDValidatorMiddleware, getProjectsByIdHandler);

module.exports = getProjectsRouter;

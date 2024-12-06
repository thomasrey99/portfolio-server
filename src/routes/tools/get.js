const { Router } = require("express");
const {
  getAllToolsHandler,
  getToolByIdHandler,
} = require("../../handlers/tools/getHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const getToolsRouter = Router();

getToolsRouter.get("/", getAllToolsHandler);
getToolsRouter.get("/:id", UUIDValidatorMiddleware, getToolByIdHandler);

module.exports = getToolsRouter;

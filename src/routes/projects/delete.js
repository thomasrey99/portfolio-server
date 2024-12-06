const { Router } = require("express");
const {
  deleteProjectHandler,
} = require("../../handlers/projects/deleteHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const deleteProjectRouter = Router();

deleteProjectRouter.delete("/:id", UUIDValidatorMiddleware, deleteProjectHandler);

module.exports = deleteProjectRouter;

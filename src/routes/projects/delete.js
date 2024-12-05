const { Router } = require("express");
const {
  deleteProjectHandler,
} = require("../../handlers/projects/deleteHandlers");

const deleteProjectRouter = Router();

deleteProjectRouter.delete("/:id", deleteProjectHandler);

module.exports = deleteProjectRouter;

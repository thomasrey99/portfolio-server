const { Router } = require("express");
const { deleteToolHandler } = require("../../handlers/tools/deleteHandlers");

const deleteToolRouter = Router();

deleteToolRouter.delete("/:id", deleteToolHandler);

module.exports = deleteToolRouter;

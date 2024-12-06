const { Router } = require("express");
const { deleteToolHandler } = require("../../handlers/tools/deleteHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");


const deleteToolRouter = Router();

deleteToolRouter.delete("/:id", UUIDValidatorMiddleware, deleteToolHandler);

module.exports = deleteToolRouter;

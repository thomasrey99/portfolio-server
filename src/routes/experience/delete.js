const { Router } = require("express");
const {
  deleteExperienceHandler,
} = require("../../handlers/experience/deleteHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const deleteExperienceRouter = Router();

deleteExperienceRouter.delete("/:id", UUIDValidatorMiddleware, deleteExperienceHandler);

module.exports = deleteExperienceRouter;

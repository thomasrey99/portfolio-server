const { Router } = require("express");
const {
  deleteExperienceHandler,
} = require("../../handlers/experience/deleteHandlers");

const deleteExperienceRouter = Router();

deleteExperienceRouter.delete("/:id", deleteExperienceHandler);

module.exports = deleteExperienceRouter;

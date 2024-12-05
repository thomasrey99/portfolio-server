const { Router } = require("express");
const {
  patchExperienceHandler,
} = require("../../handlers/experience/patchHandlers");

const patchExperienceRouter = Router();

patchExperienceRouter.patch("/:id", patchExperienceHandler);

module.exports = patchExperienceRouter;

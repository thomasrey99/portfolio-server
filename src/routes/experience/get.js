const { Router } = require("express");
const {
  getAllExperienceHandler,
  getExperienceByIdHandler,
} = require("../../handlers/experience/getHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const getExperienceRouter = Router();

getExperienceRouter.get("/", getAllExperienceHandler);
getExperienceRouter.get("/:id", UUIDValidatorMiddleware, getExperienceByIdHandler);

module.exports = getExperienceRouter;

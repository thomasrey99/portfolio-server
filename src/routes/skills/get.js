const { Router } = require("express");
const {
  getAllSkillsHandler,
  getSkillByIdHandler,
} = require("../../handlers/skills/getHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");

const getSkillsRouter = Router();

getSkillsRouter.get("/", getAllSkillsHandler);
getSkillsRouter.get("/:id", UUIDValidatorMiddleware,getSkillByIdHandler);

module.exports = getSkillsRouter;

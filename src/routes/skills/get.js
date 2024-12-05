const { Router } = require("express");
const {
  getAllSkillsHandler,
  getSkillByIdHandler,
} = require("../../handlers/skills/getHandlers");

const getSkillsRouter = Router();

getSkillsRouter.get("/", getAllSkillsHandler);
getSkillsRouter.get("/:id", getSkillByIdHandler);

module.exports = getSkillsRouter;

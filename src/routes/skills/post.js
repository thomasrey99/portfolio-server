const {Router}=require("express");
const { postSkillHandler } = require("../../handlers/skills/postHandlers");

const postSkillsRouter=Router();

postSkillsRouter.post("/", postSkillHandler);

module.exports = postSkillsRouter;
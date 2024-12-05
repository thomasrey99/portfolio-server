const {Router}=require("express");
const { patchSkillHandler } = require("../../handlers/skills/patchHandlers");


const patchSkillRouter=Router();

patchSkillRouter.patch("/:id", patchSkillHandler)

module.exports = patchSkillRouter;
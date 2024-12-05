const {Router}=require("express");
const { deleteSkillHandler } = require("../../handlers/skills/deleteHandlers");

const deleteSkillRouter=Router();

deleteSkillRouter.delete("/:id", deleteSkillHandler);

module.exports = deleteSkillRouter;
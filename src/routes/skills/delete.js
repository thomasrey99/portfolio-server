const { Router } = require("express");
const { deleteSkillHandler } = require("../../handlers/skills/deleteHandlers");
const UUIDValidatorMiddleware = require("../../utils/middlewares/UUIDValidatorMIddleware");


const deleteSkillRouter = Router();

deleteSkillRouter.delete("/:id", UUIDValidatorMiddleware, deleteSkillHandler);

module.exports = deleteSkillRouter;

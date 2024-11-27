const {Router}=require("express")
const { postSkillHand } = require("../../handlers/skills/postHandlers")

const postSkillsRouter=Router()

postSkillsRouter.post("/", postSkillHand)

module.exports = postSkillsRouter
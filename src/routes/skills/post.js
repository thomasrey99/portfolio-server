const {Router}=require("express")
const { postSkillHand } = require("../../handlers/skills/post")

const postSkillsRouter=Router()

postSkillsRouter.post("/", postSkillHand)

module.exports = postSkillsRouter
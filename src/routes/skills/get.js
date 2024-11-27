const {Router}=require("express")
const { getAllSkillsHand } = require("../../handlers/skills/getHandlers")

const skillsRouter=Router()

skillsRouter.get("/", getAllSkillsHand)

module.exports = skillsRouter
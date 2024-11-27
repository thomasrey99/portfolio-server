const {Router}=require("express")
const { getAllSkillsHand } = require("../../handlers/skills/get")

const skillsRouter=Router()

skillsRouter.get("/", getAllSkillsHand)

module.exports = skillsRouter
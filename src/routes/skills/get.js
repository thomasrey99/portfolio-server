const {Router}=require("express")
const { getAllSkillsHandler } = require("../../handlers/skills/getHandlers")

const getSkillsRouter=Router()

getSkillsRouter.get("/", getAllSkillsHandler)

module.exports = getSkillsRouter
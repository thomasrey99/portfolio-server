const {Router}=require("express")

const skillsRouter = require("./skills/index")
const toolsRouter = require("./tools")

const mainRouter=Router()

mainRouter.use("/", skillsRouter)
mainRouter.use("/", toolsRouter)

module.exports = mainRouter
const {Router}=require("express")

const skillsRouter = require("./skills/index")
const toolsRouter = require("./tools")
const experienceRouter = require("./experience")

const mainRouter=Router()

mainRouter.use("/", skillsRouter)
mainRouter.use("/", toolsRouter)
mainRouter.use("/", experienceRouter)

module.exports = mainRouter
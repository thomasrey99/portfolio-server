const {Router}=require("express")

const skillsRouter = require("./skills/index")
const toolsRouter = require("./tools")
const experienceRouter = require("./experience")
const certificationsRouter = require("./certifications")
const projectsRouter = require("./projects")

const mainRouter=Router()

mainRouter.use("/", skillsRouter)
mainRouter.use("/", toolsRouter)
mainRouter.use("/", experienceRouter)
mainRouter.use("/", certificationsRouter)
mainRouter.use("/", projectsRouter)
module.exports = mainRouter
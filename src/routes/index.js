const {Router}=require("express")

const skillsRouter = require("./skills/index")

const mainRouter=Router()

mainRouter.use("/", skillsRouter)

module.exports = mainRouter
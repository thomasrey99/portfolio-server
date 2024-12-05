const {Router}=require("express");
const getProjectsRouter = require("./get");
const postProjectsRouter = require("./post");
const patchProjectRouter = require("./patch");

const  mainProjectsRouter=Router();

mainProjectsRouter.use("/projects", getProjectsRouter);
mainProjectsRouter.use("/projects", postProjectsRouter);
mainProjectsRouter.use("/projects", patchProjectRouter)
module.exports = mainProjectsRouter;
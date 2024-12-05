const {Router}=require("express");
const getProjectsRouter = require("./get");
const postProjectsRouter = require("./post");
const patchProjectRouter = require("./patch");
const deleteProjectRouter = require("./delete");

const  mainProjectsRouter=Router();

mainProjectsRouter.use("/projects", getProjectsRouter);
mainProjectsRouter.use("/projects", postProjectsRouter);
mainProjectsRouter.use("/projects", patchProjectRouter)
mainProjectsRouter.use("/projects", deleteProjectRouter)

module.exports = mainProjectsRouter;
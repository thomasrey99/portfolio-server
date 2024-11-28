const {Router}=require("express");
const getProjectsRouter = require("./get");
const postProjectsRouter = require("./post");

const  mainProjectsRouter=Router();

mainProjectsRouter.use("/projects", getProjectsRouter);
mainProjectsRouter.use("/projects", postProjectsRouter);

module.exports = mainProjectsRouter;
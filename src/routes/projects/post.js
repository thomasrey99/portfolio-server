const {Router}=require("express");
const { postProjectsHandler } = require("../../handlers/projects/postHandlers");

const postProjectsRouter=Router();

postProjectsRouter.post("/", postProjectsHandler);

module.exports = postProjectsRouter;
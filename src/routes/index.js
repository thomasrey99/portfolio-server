const { Router } = require("express");

const skillsRouter = require("./skills/index");
const toolsRouter = require("./tools");
const experienceRouter = require("./experience");
const certificationsRouter = require("./certifications");
const projectsRouter = require("./projects");
const authorize = require("../utils/middlewares/authorizeMiddleware");

const mainRouter = Router();

mainRouter.use("/", authorize, skillsRouter);
mainRouter.use("/", authorize, toolsRouter);
mainRouter.use("/", authorize, experienceRouter);
mainRouter.use("/", authorize, certificationsRouter);
mainRouter.use("/", authorize, projectsRouter);

module.exports = mainRouter;

const { Router } = require("express");
const { patchToolHandler } = require("../../handlers/tools/patchHandlers");

const patchToolRouter = Router();

patchToolRouter.patch("/:id", patchToolHandler);

module.exports = patchToolRouter;

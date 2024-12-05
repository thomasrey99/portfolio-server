const {Router}=require("express");
const { patchProjectHandler } = require("../../handlers/projects/patchHandlers");


const patchProjectRouter=Router();

patchProjectRouter.patch("/:id", patchProjectHandler)

module.exports = patchProjectRouter;
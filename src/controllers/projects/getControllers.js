const {Project}=require("../../db")

const getAllProjectsController=async ()=>{
    const projects=await Project.findAll()
    return projects;
}

module.exports = {
    getAllProjectsController
}
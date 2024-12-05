const { Project } = require("../../db");

const getAllProjectsController = async () => {
  const projects = await Project.findAll();
  return projects;
};

const getProjectByIdController = async (id) => {
  try {
    const project = await Project.findByPk(id);
    if (project) {
      return project;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  getAllProjectsController,
  getProjectByIdController,
};

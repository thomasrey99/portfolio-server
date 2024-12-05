const { Project } = require("../../db");

const deleteProjectController = async (id) => {
  try {
    const project = await Project.findByPk(id);
    if (project) {
      const deleteProject = await project.destroy();
      if (deleteProject) {
        return project;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  deleteProjectController,
};

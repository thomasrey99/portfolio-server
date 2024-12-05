const { Project } = require("../../db");

const patchProjectController = async (id, data) => {
  try {
    const project = await Project.findByPk(id);
    if (!project) {
      return false;
    }
    const updatedProject = await project.update(data);
    if (updatedProject) {
      return updatedProject;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  patchProjectController,
};

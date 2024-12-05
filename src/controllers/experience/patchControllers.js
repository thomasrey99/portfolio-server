const { Experience } = require("../../db");

const patchExperienceController = async (id, data) => {
  try {
    const experience = await Experience.findByPk(id);
    if (!experience) {
      return false;
    }
    const updatedExperience = await experience.update(data);
    if (updatedExperience) {
      return updatedExperience;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  patchExperienceController,
};

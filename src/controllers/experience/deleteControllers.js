const { Experience } = require("../../db");

const deleteExperienceController = async (id) => {
  try {
    const experience = await Experience.findByPk(id);
    if (experience) {
      const deleteExperience = await experience.destroy();
      if (deleteExperience) {
        return experience;
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
  deleteExperienceController,
};

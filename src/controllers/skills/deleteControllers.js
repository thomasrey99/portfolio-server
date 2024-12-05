const { Skill } = require("../../db");

const deleteSkillController = async (id) => {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      const deleteSkill = await skill.destroy();
      if (deleteSkill) {
        return skill;
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
  deleteSkillController,
};

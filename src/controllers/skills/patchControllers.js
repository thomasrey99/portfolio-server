const { Skill } = require("../../db");

const patchSkillController = async (id, data) => {
  try {
    const skill = await Skill.findByPk(id);
    if (!skill) {
      return false;
    }
    const updatedSkill = await skill.update(data);
    if (updatedSkill) {
      return updatedSkill;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = {
  patchSkillController,
};

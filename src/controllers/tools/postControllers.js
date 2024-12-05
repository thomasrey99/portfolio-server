const { Tool } = require("../../db");

const postToolController = async (data) => {
  const [tool, created] = await Tool.findOrCreate({
    where: {
      name: data.name,
    },
    defaults: data,
  });
  if (created) {
    return tool;
  } else {
    return false;
  }
};

module.exports = {
  postToolController,
};

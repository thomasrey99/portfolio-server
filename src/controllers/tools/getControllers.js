const { Tool } = require("../../db");

const getAllToolsController = async () => {
  try {
    const tools = await Tool.findAll();
    return {
      status: 200,
      error: false,
      data: tools,
      message: "Registros de herramientas obtenidos con exito",
    };
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

const getToolByIdController = async (id) => {
  try {
    const tool = await Tool.findByPk(id);
    if (tool) {
      return {
        status: 200,
        error: false,
        data: tool,
        message: "Registro de herramienta obtenido con exito",
      };
    } else {
      return {
        status: 400,
        error: true,
        data: null,
        message: `El registro de herramienta con UUID ${id} no existe o fue destruido`,
      };
    }
  } catch (error) {
    return {
      status: 500,
      error: true,
      data: null,
      message: error.message,
    };
  }
};

module.exports = {
  getAllToolsController,
  getToolByIdController,
};
